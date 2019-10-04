'use strict';

const FabricCAServices = require('fabric-ca-client');
const { FileSystemWallet, X509WalletMixin } = require('fabric-network');
const fs = require('fs');
const path = require('path');
const logger = require('./logger');

const ccpPath = path.resolve(
  __dirname,
  './gateway/channel1_aimcontract_profile.json'
);
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
const ccp = JSON.parse(ccpJSON);

async function main() {
  try {
    const CA_Name = ccp.organizations.org1msp.certificateAuthorities;
    // Create a new CA client for interacting with the CA.
    const caURL = ccp.certificateAuthorities[CA_Name].url;
    const ca = new FabricCAServices(caURL);

    // Create a new file system based wallet for managing identities.
    const walletPath = path.join(__dirname, './wallet');
    const wallet = new FileSystemWallet(walletPath);
    logger.info(`Wallet path: ${walletPath}`);

    // Check to see if we've already enrolled the admin user.
    const userExists = await wallet.exists('User1@aim.ibm.com');
    if (userExists) {
      logger.info(
        'An identity for "User1@aim.ibm.com" already exists in the wallet'
      );
      return;
    }

    // Enroll the admin user, and import the new identity into the wallet.
    const enrollment = await ca.enroll({
      enrollmentID: 'admin',
      enrollmentSecret: 'adminpw'
    });
    const identity = X509WalletMixin.createIdentity(
      'org1msp',
      enrollment.certificate,
      enrollment.key.toBytes()
    );
    await wallet.import('User1@aim.ibm.com', identity);
    logger.info(
      'Successfully enrolled client "User1@aim.ibm.com" and imported it into the wallet'
    );
  } catch (error) {
    logger.error(`Failed to enroll "User1@aim.ibm.com": ${error}`);
    process.exit(1);
  }
}

main();

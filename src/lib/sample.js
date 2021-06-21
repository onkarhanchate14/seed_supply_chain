

/**
 * Sample transaction processor function.
 * @param {org.example.basic.TransferCommodity} tx - The sample transaction instance.
 * @transaction
 */
function TransferCommodity(tx) {  // eslint-disable-line no-unused-vars
  
    tx.asset.owner= tx.newowner;

  return getAssetRegistry('org.example.basic.Commodity').then(function (assetRegistry) {
    return assetRegistry.update(tx.asset);
    });

}
   
  
  
/**
 * Sample transaction processor function.
 * @param {org.example.basic.verifyasset} tx - The sample transaction instance.
 * @transaction
 */
function verifyasset(tx) {  // eslint-disable-line no-unused-vars

   
    // Update the asset with the new value.
    
    tx.asset.VerfiedStatus= tx.Status;
     tx.asset.ReviewByVerifier=tx.Review

  return getAssetRegistry('org.example.basic.Commodity').then(function (assetRegistry) {
    return assetRegistry.update(tx.asset);
    });
    
    }
   

 
 
  

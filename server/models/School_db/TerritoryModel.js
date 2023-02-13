import TerritoryModelGenerated from "./generated/TerritoryModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = TerritoryModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await TerritoryModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...TerritoryModelGenerated,
  ...customModel
};

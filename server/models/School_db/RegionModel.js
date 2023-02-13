import RegionModelGenerated from "./generated/RegionModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = RegionModelGenerated.init();
  
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
      return await RegionModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...RegionModelGenerated,
  ...customModel
};

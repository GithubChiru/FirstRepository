sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("langcassignment.controller.controller.App", {
        onInit() {
          debugger

          // var model3 = new sap.ui.model.json.JSONModel({ cstTab: modeldata });
          //  this.getOwnerComponent().setModel(model3);
        },
//         onAfterRedering: function () {
//           var model3 = new sap.ui.model.json.JSONModel({ cstTab: modeldata });
//           this.getOwnerComponent().setModel(model3);
       
//  },
       selectionChange:function(oEvent)
        {
          debugger

          
          // var oResourceBundle = this.getView().getModel("i18n_hi").getResourceBundle();
          // var thd1=oResourceBundle.aPropertyFiles[0].mProperties["XTIT_FNAME"];
          // var i18nf=sap.ui.getCore().getConfiguration().setLanguage("de");
          // var oTable = this.byId("idTable");
         
          // var th1=oTable.getColumns()[0].mAggregations.header.mProperties.text;
          
          // th1=th1.replaceAll(th1,thd1);
          // oTable.push(th1);

          // oResourceBundle = this.getView().getModel("i18n_hi").getResourceBundle();
          // oTable.getColumns()[0].mAggregations.header.mProperties.text;
          // var rModel= new sap.ui.model.resource.ResourceModel();
          //var path=this.getView().getModel("i18n");
          // oEvent.getObject();
          // var cat = this.getView().byId("inp1").getValue;
          var b=oEvent.mParameters.selectedItem.mProperties.text;
          // var a=this.getView().byId("fname").mProperties.text;
          if(b=="Hindi")
          {
            sap.ui.getCore().getConfiguration().getLanguage();
            sap.ui.getCore().getConfiguration().setLanguage("hi"); 
  
          }else if(b=="Kannada")
          {
            sap.ui.getCore().getConfiguration().getLanguage();
            sap.ui.getCore().getConfiguration().setLanguage("kn"); 
  
          } else if(b=="Telugu") 
          {
            sap.ui.getCore().getConfiguration().getLanguage();
            sap.ui.getCore().getConfiguration().setLanguage("te"); 
  
          }
          else if(b=="English")
          {
            sap.ui.getCore().getConfiguration().getLanguage();
            sap.ui.getCore().getConfiguration().setLanguage("en"); 
  
          }
             
          // this.getView().byId("fname").mProperties.text=a;

        },
        // clickLang:function()
        // {
        //   sap.ui.getCore().getConfiguration().getLanguage();
        //   sap.ui.getCore().getConfiguration().setLanguage("kn"); 
        // },
        modeldata: null,

        onClick: function() {
           debugger;
         
           var oFormField2 = this.getView().byId("input2").getValue();
           var oFormField3 = this.getView().byId("input3").getValue();
           var oFormField4 = this.getView().byId("input4").getValue();
           var oFormField5 = this.getView().byId("input5").getValue();

           var oModel = this.getView().getModel();

            this.modeldata=oModel.oData.cstTab;

         this.modeldata.push({
          "ingrd2": oFormField2,
          "ingrd3": oFormField3,
          "ingrd4": oFormField4,
          "ingrd5": oFormField5
        });

           var model3 = new sap.ui.model.json.JSONModel({ cstTab: this.modeldata });
           this.getOwnerComponent().setModel(model3);

       }
      });
    }
  );
  
export const environment = {
    apiKey: 'your_api_key_here',
    apiUrl: 'https://login.salesforce.com/services/oauth2/token',
    client_id: '3MVG9ux34Ig8G5erjcCO_xOoFw9FWa3KFdBWhRDFxQ_RC5tOLFEhd6v8M_zfSLD4DzmVpZ.PArXpGmdgBHAiS',
    client_secret: 'FCCA58B5D794BFA13A418868C647E1097F17A03498188F9DF4F12CBD7B2B5D6F' ,
    username: 'vlocity@certification.com',
    password:'salesforce2024',
    
    // Salesforce URLs

    //Login
    userLoginUrl: "https://certificationcom5-dev-ed.develop.my.salesforce.com/services/apexrest/omnistudio/v1/integrationprocedure/AtendeJa_Login", //ok

    //Usuário
    createPatientUrl : "https://certificationcom5-dev-ed.develop.my.salesforce.com/services/apexrest/omnistudio/v1/integrationprocedure/AtendeJa_CreatePatient",
    consultPatientUrl: "https://certificationcom5-dev-ed.develop.my.salesforce.com/services/apexrest/omnistudio/v1/integrationprocedure/AtendeJa_ConsultPatient", // ok
    updatePatientUrl: "https://certificationcom5-dev-ed.develop.my.salesforce.com/services/apexrest/omnistudio/v1/integrationprocedure/AtendeJa_UpdatePatient",
    deletePatientUrl: "https://certificationcom5-dev-ed.develop.my.salesforce.com/services/apexrest/omnistudio/v1/integrationprocedure/AtendeJa_DeletePatient",
    
    //Hospital
    getAllHospitalUrl: "https://certificationcom5-dev-ed.develop.my.salesforce.com/services/apexrest/omnistudio/v1/integrationprocedure/AtendeJa_GetHospital",
    getSpecificHospitalUrl: "https://certificationcom5-dev-ed.develop.my.salesforce.com/services/apexrest/omnistudio/v1/integrationprocedure/AtendeJa_GetSpecificHospital?hospital_id="
    
  };
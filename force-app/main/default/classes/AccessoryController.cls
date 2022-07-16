public with sharing class AccessoryController {
    
    @AuraEnabled(Cacheable = true)
    public static AccessoryOptionAndVehicleAccessory getAccessories(Id vehicleId) {
        AccessoryOptionAndVehicleAccessory accessoryOptionAndVehicleAccessory = new AccessoryOptionAndVehicleAccessory();
        accessoryOptionAndVehicleAccessory.AccessoryOptions = getAccessoryOptions();
        accessoryOptionAndVehicleAccessory.Accessories = getVehicleAccessories(vehicleId);
        return accessoryOptionAndVehicleAccessory;
    }

    private static List<String> getVehicleAccessories(Id vehicleId) {
        List<Vehicle_Accessory__c> vehicleAccessories = [
            SELECT Id, Vehicle__c, Accessory__c
            FROM Vehicle_Accessory__c
            WHERE Vehicle__c = :vehicleId
        ];

        List<String> accessoryIds = new List<String>();
        for (Vehicle_Accessory__c vehicleAccessory : vehicleAccessories) {
            accessoryIds.add(vehicleAccessory.Accessory__c);
        }

        return accessoryIds;
    }

    private static List<AccessoryOption> getAccessoryOptions() {
        List<Accessory__c> Accessories = [
            SELECT Id, Name
            FROM Accessory__c
        ];

        List<AccessoryOption> AccessoryOptions = new List<AccessoryOption>();
        for (Accessory__c accessory : Accessories) {
            AccessoryOption accessoryOption = new AccessoryOption();
            accessoryOption.label = accessory.Name;
            accessoryOption.value = accessory.Id;
            AccessoryOptions.add(accessoryOption);
        }

        return AccessoryOptions;
    }

    public class AccessoryOptionAndVehicleAccessory {
        @AuraEnabled
        public List<AccessoryOption> AccessoryOptions {get; set;}

        @AuraEnabled
        public List<String> Accessories {get; set;}
    }

    public class AccessoryOption {
        @AuraEnabled
        public String label {get; set;}

        @AuraEnabled
        public String value {get; set;}
    }
}

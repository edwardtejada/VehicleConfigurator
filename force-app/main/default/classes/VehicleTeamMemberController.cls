public with sharing class VehicleTeamMemberController {
    
    @AuraEnabled(cacheable = false)
    public static List<Vehicle_Team_Member__c> getVehicleTeamMember(Id vehicleId) {
        return [
            SELECT Id, Name, Vehicle_Team_Member_Role__r.Name, Team_Member__r.Name, Team_Member__r.SmallPhotoUrl, Team_Member__r.FullPhotoUrl
            FROM Vehicle_Team_Member__c
            WHERE Vehicle__c = :vehicleId
        ];
    }
}

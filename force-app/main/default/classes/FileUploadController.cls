public with sharing class FileUploadController {

    @AuraEnabled(cacheable = false)
    public static List<ContentDocumentLink> getFiles(String recordId){
        return [
            SELECT LinkedEntityId, ContentDocument.Title, ContentDocument.ContentSize, ContentDocument.FileType, ContentDocumentId 
            FROM ContentDocumentLink  
            WHERE LinkedEntityId = :recordId
        ];
    }
}

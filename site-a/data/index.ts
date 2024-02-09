export const userDetails = {
  "firstName": "Biswajit",
  "lastName": "Paul",
  "username": "biswajit.paul@obloliving.com",
  "gender": "male",
  "contact": [
    {
      "label": "Default",
      "contact": "biswajit.paul@obloliving.com",
      "isDefault": true,
      "contactType": "email",
      "sendNotification": true,
      "_id": "63b817be6d786acd9d4b3a8b"
    }
  ],
  "clientName": [],
  "groups": [
    "admin",
    "admin"
  ],
  "preferredLanguage": "en_EN",
  "brand": "default",
  "isPrivacyPolicyAccepted": true,
  "areTermsOfServiceAccepted": true,
  "isProfileMarkedForDeletion": false,
  "onBoardingType": "User/SelfCare/Chrome",
  "address": [],
  "created": "2023-01-06T12:44:46.012Z",
  "receiveEmail": true,
  "receiveAnnouncementsBy": [
    {
      "contactType": "pushMobile",
      "sendAnnouncements": true,
      "_id": "64de13cc510550df5f8d5d42"
    },
    {
      "contactType": "email",
      "sendAnnouncements": true,
      "_id": "64de13cc510550df5f8d5d43"
    },
    {
      "contactType": "whatsapp",
      "sendAnnouncements": true,
      "_id": "657314d4f1c22ed8ae7c996a"
    }
  ],
  "auth": {
    "_id": "63b817be6d786acd9d4b3a8e",
    "identity": "biswajit.paul@obloliving.com",
    "activated": "2023-01-09T07:03:16.175Z"
  },
  "id": "63b817be6d786acd9d4b3a8a",
  "parentsIds": [],
  "devices": [],
  "_id": "63b817be6d786acd9d4b3a8a"
};

export const lks = {
  "url": "/gate_select",
  "access": [
    "admin"
  ],
  "views": {
    "content_admin_menu": {
      "templateUrl": "partials/gatesel.html",
      "controller": "gateselController",
      "controllerAs": "gateSelCtrl",
      "resolve": {
        "gateways": [
          "UDMService",
          null
        ],
        "$template": [
          null
        ]
      },
      "resolveAs": "$resolve"
    }
  },
  "data": {
    "pageTitle": "SELECT_GATEWAY_PAGE_TITLE"
  },
  "name": "gate_select"
}
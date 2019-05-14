# Universal Feedback Service

Cloud Function using Firestore to store user feedback.

## Using

## Author

David Hodge

## Development

Use Google Cloud Functions Emulator

```
npm install --save --save-exact @google-cloud/firestore
```

```
npm install -g @google-cloud/functions-emulator
```

```
export GOOGLE_APPLICATION_CREDENTIALS=/Users/myname/.cred/myserviceaccount.json
functions start
functions deploy main --trigger-http
```


## Deploy

### CLI
 ```gcloud functions deploy feedback --trigger-http --runtime=nodejs10 --region=us-east1```

 * Regions us-east4 not available for functions, yet

### Cloud Build

See cloudbuild.yaml



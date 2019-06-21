export GOOGLE_APPLICATION_CREDENTIALS="$(pwd)/key.json"

lng=$1;

projectID=$2;

eval "TARGET_LNG=${lng} PROJECT_ID=${projectID} npm run prod"
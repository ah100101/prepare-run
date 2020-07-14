"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const functions = require("firebase-functions");
const cors = require("cors");
const corsHandler = cors({ origin: true });
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
exports.helloWorld = functions.https.onRequest((request, response) => {
    corsHandler(request, response, () => {
        functions.logger.info("Hello logs!", { structuredData: true });
        response.send("Hello from Firebase!");
    });
});
//# sourceMappingURL=index.js.map
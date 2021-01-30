"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const router = express_1.default.Router();
const port = 3000;
router.get('/', (req, res, next) => {
    res.send('server listen');
});
app.listen(port, () => {
    console.log('Server is ranning is port 3000');
});
//# sourceMappingURL=app.js.map
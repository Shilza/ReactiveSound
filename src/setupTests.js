import 'jest-dom/extend-expect';
import {cleanup} from "react-testing-library";

afterEach(cleanup);
global.fetch = require('jest-fetch-mock');
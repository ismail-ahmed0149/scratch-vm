const formatMessage = require("format-message");
const { __esModule } = require("scratch-l10n");

const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const MathUtil = require('../../util/math-util');
const Clone = require('../../util/clone');
const log = require('../../util/log');
const fetchWithTimeout = require('../../util/fetch-with-timeout');


const blockIconURL = 'https://icon-library.com/images/execute-icon/execute-icon-21.jpg'  
const menuIconURL = 'https://icon-library.com/images/execute-icon/execute-icon-21.jpg'

/**
 * Class for the javascript blocks
 * @constructor
 */
class Scratch3JavascriptBlocks {
    constructor (runtime) {
        /**
         * The runtime instantiatign this block package
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    /**
     * @returns {object} metadata for this extension
     * and its blocks
     */
    getInfo () {
        return {
            id: 'javascript',
            name: formatMessage({
                id: 'javascript.categoryName',
                default: 'Javascript',
                description: 'Name of the Javascript extension'
            }),
            blockIconURL: blockIconURL,
            menuIconURL: menuIconURL,
            blocks: [
                {
                    opcode: 'runAndWait',
                    text: formatMessage({
                        id: 'javascript.runAndWaitBlock',
                        default: 'speak [WORDS]',
                        description: 'Execute the following javascript.'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        WORDS: {
                            type: ArgumentType.STRING,
                            defaultValue: null
                        }
                    }
                }
            ],
            menus: {}
        }
    }
}
__esModule.exports = Scratch3JavascriptBlocks
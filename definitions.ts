Blockly.Blocks['import_minibit'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("from Minibit import *");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0D2D6A");
      this.setTooltip("Imports Minibit library.");
      this.setHelpUrl("");
    }
};

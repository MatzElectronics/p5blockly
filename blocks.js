Blockly.Blocks['shape_ellipse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("draw ellipse");
    this.appendValueInput("X")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x");
    this.appendValueInput("Y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("W")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("width");
    this.appendValueInput("H")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("height");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['shape_ellipse'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'W', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'H', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'ellipse(' + value_x + ', ' + value_y + ', ' + value_w + ', ' + value_h+ ');\n';
  return code;
};

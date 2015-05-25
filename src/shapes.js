var createjs = require('../lib/createjs'),
    mix = require('../lib/mix');

var shapes = module.exports = {};

shapes.text = function() {
    var props = mix.apply(null, arguments);

    var text = new createjs.Text(
        props.content,
        props.font || '16px Arial',
        props.color || '#000000'
    );
    text.x = props.x;
    text.y = props.y;

    if(props.textAlign) text.textAlign = props.textAlign;
    if(props.textBaseline) text.textBaseline = props.textBaseline;

    if(props.shadow) text.shadow = shapes.shadow(props.shadow);

    return text;
};

shapes.shadow = function() {
    var props = mix.apply(null, arguments);

    return new createjs.Shadow(
        props.color || '#000000',
        props.left || 1,
        props.top || 1,
        props.size || 3
    );
};


"use strict";

//Initializing nodes

var nodes = [];
createNode(24, 23, 20, "content/images/diagram/overview/cards_05.png");
createNode(555, 48, 41, "content/images/diagram/overview/cards_03.png");
createNode(461, 174, -64, "content/images/diagram/overview/cards_07.png");
createNode(455, 634, 0, "content/images/diagram/overview/cards_09.png");
createNode(81, 583, 0, "content/images/diagram/overview/cards_11.png");
createNode(861, 449, -24, "content/images/diagram/overview/cards_14.png");
createNode(34, 417, 20, "content/images/diagram/overview/cards_16.png");
createNode(674, 418, 37, "content/images/diagram/overview/cards_18.png");
createNode(1181, 921, -75, "content/images/diagram/overview/cards_23.png");
createNode(159, 125, -9, "content/images/diagram/overview/cards_25.png");
createNode(776, 249, 0, "content/images/diagram/overview/cards_100.png");
createNode(776, 27, 0, "content/images/diagram/overview/cards_101.png");
createNode(634, 149, -79, "content/images/diagram/overview/cards_102.png");
createNode(287, 159, 0, "content/images/diagram/overview/cards_103.png");
createNode(223, 584, -20, "content/images/diagram/overview/cards_104.png");
createNode(294, 8, -52, "content/images/diagram/overview/cards_105.png");
createNode(388, 296, 59, "content/images/diagram/overview/cards_106.png");
createNode(102, 267, 0, "content/images/diagram/overview/cards_107.png");
createNode(380, 452, 0, "content/images/diagram/overview/cards_108.png");
createNode(683, 550, 31, "content/images/diagram/overview/cards_109.png");
createNode(1038, 567, 20, "content/images/diagram/overview/cards_05.png");
createNode(849, 115, 41, "content/images/diagram/overview/cards_03.png");
createNode(1165, 144, -64, "content/images/diagram/overview/cards_07.png");
createNode(497, 815, 0, "content/images/diagram/overview/cards_09.png");
createNode(993, 480, 0, "content/images/diagram/overview/cards_100.png");
createNode(1240, 582, -38, "content/images/diagram/overview/cards_101.png");
createNode(941, 249, 0, "content/images/diagram/overview/cards_102.png");
createNode(674, 921, -41, "content/images/diagram/overview/cards_104.png");
createNode(296, 816, -20, "content/images/diagram/overview/cards_104.png");
createNode(1025, 45, -52, "content/images/diagram/overview/cards_105.png");
createNode(962, 943, 59, "content/images/diagram/overview/cards_106.png");
createNode(1093, 409, -42, "content/images/diagram/overview/cards_107.png");
createNode(445, 939, 33, "content/images/diagram/overview/cards_108.png");
createNode(756, 783, 31, "content/images/diagram/overview/cards_109.png");
createNode(15, 1047, 0, "content/images/diagram/overview/cards_05.png");
createNode(1072, 102, 41, "content/images/diagram/overview/cards_03.png");
createNode(417, 1198, -64, "content/images/diagram/overview/cards_07.png");
createNode(1148, 815, 0, "content/images/diagram/overview/cards_09.png");
createNode(1322, 310, -34, "content/images/diagram/overview/cards_11.png");
createNode(833, 1442, -36, "content/images/diagram/overview/cards_14.png");
createNode(25, 1441, 31, "content/images/diagram/overview/cards_16.png");
createNode(630, 1442, 0, "content/images/diagram/overview/cards_18.png");
createNode(1454, 102, 37, "content/images/diagram/overview/cards_20.png");
createNode(1253, 1306, -75, "content/images/diagram/overview/cards_23.png");
createNode(115, 1148, -9, "content/images/diagram/overview/cards_25.png");
createNode(993, 480, 0, "content/images/diagram/overview/cards_11.png");
createNode(115, 815, -24, "content/images/diagram/overview/cards_14.png");
createNode(913, 676, 31, "content/images/diagram/overview/cards_16.png");
createNode(1216, 310, 0, "content/images/diagram/overview/cards_18.png");
createNode(590, 614, -16, "content/images/diagram/overview/cards_20.png");
createNode(285, 685, -75, "content/images/diagram/overview/cards_23.png");
createNode(232, 357, -9, "content/images/diagram/overview/cards_25.png");
createNode(733, 1273, 0, "content/images/diagram/overview/cards_100.png");
createNode(733, 1051, 0, "content/images/diagram/overview/cards_101.png");
createNode(590, 1273, -79, "content/images/diagram/overview/cards_102.png");
createNode(244, 1212, 0, "content/images/diagram/overview/cards_103.png");
createNode(1547, 9, -20, "content/images/diagram/overview/cards_104.png");
createNode(251, 1031, -52, "content/images/diagram/overview/cards_105.png");
createNode(344, 1320, 59, "content/images/diagram/overview/cards_106.png");
createNode(58, 1291, 0, "content/images/diagram/overview/cards_107.png");
createNode(287, 1442, 0, "content/images/diagram/overview/cards_108.png");
createNode(1499, 733, 31, "content/images/diagram/overview/cards_109.png");
createNode(1566, 726, 20, "content/images/diagram/overview/cards_05.png");
createNode(805, 1138, 41, "content/images/diagram/overview/cards_03.png");
createNode(1122, 1168, -64, "content/images/diagram/overview/cards_07.png");
createNode(1216, 0, 0, "content/images/diagram/overview/cards_09.png");
createNode(1326, 534, 0, "content/images/diagram/overview/cards_11.png");
createNode(1514, 930, -24, "content/images/diagram/overview/cards_14.png");
createNode(1622, 473, 31, "content/images/diagram/overview/cards_16.png");
createNode(1498, 1124, 0, "content/images/diagram/overview/cards_18.png");
createNode(1668, 228, 0, "content/images/diagram/overview/cards_20.png");

function createNode(x, y, angle, src) {
    var width = 102;var height = 142;
    x += 51;
    y += 71;
    nodes.push({
        name: ej.datavisualization.Diagram.Util.randomId(),
        offsetX: x, offsetY: y, rotateAngle: angle, type: "image", source: src, borderColor: "none"
    });
}
var defaultSettings = {
    node: {
        width: 102, height: 142
    }
};
var snapSettings = { snapConstraints: ej.datavisualization.Diagram.SnapConstraints.None };
var tool = ej.datavisualization.Diagram.Tool.ZoomPan;
ReactDOM.render(React.createElement(EJ.Diagram, {
    id: "diagram6",
    height: "100%",
    width: "100%",
    nodes: nodes,
    snapSettings: snapSettings,
    defaultSettings: defaultSettings,
    enableContextMenu: false,
    tool: tool
}), document.getElementById('diagram-overview'));

function diagram6Create(args) {
    var height = $("#diagram6").height() - $(".e-box.e-addborderbottom.e-header").height();
    $("#diagram6").ejDiagram({ height: height });
}

ReactDOM.render(React.createElement(EJ.Overview, {
    id: "diagram6_overview",
    sourceID: "diagram6",
    width: "100%",
    height: "100%",
    create: diagram6Create
}), document.getElementById('diagram-overview-control'));

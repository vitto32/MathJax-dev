import {ParserTest} from './parser-tests.js';
import '../mathjax3/js/input/tex/physics/PhysicsConfiguration.js';

class ParserPhysicsTest2_3 extends ParserTest {

  constructor() {
    super();
    this.packages = ['base', 'physics'];
  }
};

let parserTest = new ParserPhysicsTest2_3();


parserTest.runTest(
  'Vector_Unit_0', '\\vu{=}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 3,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mover",
               "texClass": 3,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0,
                             "accent": true},
               "properties": {},
               "childNodes": [
                 {"kind": "mo",
                  "texClass": 3,
                  "attributes": {},
                  "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "form": "infix"},
                      "properties": {"movablelimits": false,
                        "texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "="}],
                      "isEmbellished": true},
                    {"kind": "mo",
                      "texClass": 3,
                      "attributes": {"stretchy": false},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "form": "infix",
                        "accent": true,
                        "stretchy": true},
                      "properties": {},
                      "childNodes": [
                        {"kind": "text",
                          "text": "^"}],
                      "isEmbellished": true}],
                  "isEmbellished": true}],
              "isInferred": true,
              "isEmbellished": true}],
          "isEmbellished": true}],
      "isInferred": true,
      "isEmbellished": true}],
  "isEmbellished": true}
);


parserTest.runTest(
  'Vector_Unit_1', '\\vectorunit{a}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mover",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0,
                             "accent": true},
               "properties": {},
               "childNodes": [
                 {"kind": "mi",
                  "texClass": 0,
                      "attributes": {"mathvariant": "bold"},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "mathvariant": "italic"},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "a"}]},
                    {"kind": "mo",
                      "texClass": 3,
                      "attributes": {"stretchy": false},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "form": "infix",
                        "accent": true,
                        "stretchy": true},
                      "properties": {},
                      "childNodes": [
                        {"kind": "text",
                          "text": "^"}],
                      "isEmbellished": true}]}],
              "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Vector_Unit_2', '\\vu{a}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mover",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0,
                             "accent": true},
               "properties": {},
               "childNodes": [
                 {"kind": "mi",
                  "texClass": 0,
                      "attributes": {"mathvariant": "bold"},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "mathvariant": "italic"},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "a"}]},
                    {"kind": "mo",
                      "texClass": 3,
                      "attributes": {"stretchy": false},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "form": "infix",
                        "accent": true,
                        "stretchy": true},
                      "properties": {},
                      "childNodes": [
                        {"kind": "text",
                          "text": "^"}],
                      "isEmbellished": true}]}],
              "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Vector_Unit_3', '\\vu{\\Gamma}\\Gamma',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mover",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0,
                             "accent": true},
               "properties": {},
               "childNodes": [
                 {"kind": "mi",
                  "texClass": 0,
                  "attributes": {"mathvariant": "bold"},
                  "inherited": {"displaystyle": true,
                                "scriptlevel": 0,
                                "mathvariant": "italic"},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "Γ"}]},
                    {"kind": "mo",
                      "texClass": 3,
                      "attributes": {"stretchy": false},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "form": "infix",
                        "accent": true,
                        "stretchy": true},
                      "properties": {},
                      "childNodes": [
                        {"kind": "text",
                          "text": "^"}],
                      "isEmbellished": true}]}],
              "isInferred": true}]},
        {"kind": "mi",
          "texClass": 0,
          "attributes": {"mathvariant": "normal"},
          "inherited": {"displaystyle": true,
            "scriptlevel": 0,
            "mathvariant": "italic"},
          "properties": {},
          "childNodes": [
            {"kind": "text",
              "text": "Γ"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Vector_Unit_4', '\\vu{2}2',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mover",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0,
                             "accent": true},
               "properties": {},
               "childNodes": [
                 {"kind": "mn",
                  "texClass": 0,
                  "attributes": {"mathvariant": "bold"},
                  "inherited": {"displaystyle": true,
                        "scriptlevel": 0},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "2"}]},
                    {"kind": "mo",
                      "texClass": 3,
                      "attributes": {"stretchy": false},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "form": "infix",
                        "accent": true,
                        "stretchy": true},
                      "properties": {},
                      "childNodes": [
                        {"kind": "text",
                          "text": "^"}],
                      "isEmbellished": true}]}],
              "isInferred": true}]},
        {"kind": "mn",
          "texClass": 0,
          "attributes": {},
          "inherited": {"displaystyle": true,
            "scriptlevel": 0},
          "properties": {},
          "childNodes": [
            {"kind": "text",
              "text": "2"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Vector_Unit_5', '\\vu{\\theta}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mover",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0,
                             "accent": true},
               "properties": {},
               "childNodes": [
                 {"kind": "mi",
                      "texClass": 0,
                      "attributes": {},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "mathvariant": "italic"},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "θ"}]},
                    {"kind": "mo",
                      "texClass": 3,
                      "attributes": {"stretchy": false},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "form": "infix",
                        "accent": true,
                        "stretchy": true},
                      "properties": {},
                      "childNodes": [
                        {"kind": "text",
                          "text": "^"}],
                      "isEmbellished": true}]}],
              "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Vector_Unit_6', '\\vu{\\theta\\Gamma a\\delta \\frac{\\theta}{b}}\\frac{\\theta}{b}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mover",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0,
                             "accent": true},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": true,
                                "scriptlevel": 0},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {"displaystyle": true,
                                   "scriptlevel": 0,
                                   "mathvariant": "italic"},
                     "properties": {"texprimestyle": true},
                     "childNodes": [
                       {"kind": "text",
                        "text": "θ"}]},
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {"mathvariant": "bold"},
                     "inherited": {"displaystyle": true,
                                   "scriptlevel": 0,
                                   "mathvariant": "italic"},
                     "properties": {"texprimestyle": true},
                     "childNodes": [
                       {"kind": "text",
                        "text": "Γ"}]},
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {"mathvariant": "bold"},
                     "inherited": {"displaystyle": true,
                                   "scriptlevel": 0,
                                   "mathvariant": "italic"},
                     "properties": {"texprimestyle": true},
                     "childNodes": [
                       {"kind": "text",
                        "text": "a"}]},
                    {"kind": "mi",
                     "texClass": 0,
                          "attributes": {},
                          "inherited": {"displaystyle": true,
                            "scriptlevel": 0,
                            "mathvariant": "italic"},
                          "properties": {"texprimestyle": true},
                          "childNodes": [
                            {"kind": "text",
                              "text": "δ"}]},
                        {"kind": "mfrac",
                          "texClass": null,
                          "attributes": {},
                          "inherited": {"displaystyle": true,
                            "scriptlevel": 0},
                          "properties": {"texprimestyle": true},
                          "childNodes": [
                            {"kind": "mi",
                              "texClass": 0,
                              "attributes": {},
                              "inherited": {"displaystyle": false,
                                "scriptlevel": 0,
                                "mathvariant": "italic"},
                              "properties": {"texprimestyle": true},
                              "childNodes": [
                                {"kind": "text",
                                  "text": "θ"}]},
                            {"kind": "mi",
                              "texClass": 0,
                              "attributes": {"mathvariant": "bold"},
                              "inherited": {"displaystyle": false,
                                "scriptlevel": 0,
                                "mathvariant": "italic"},
                              "properties": {"texprimestyle": true},
                              "childNodes": [
                                {"kind": "text",
                                  "text": "b"}]}]}]},
                    {"kind": "mo",
                      "texClass": 3,
                      "attributes": {"stretchy": false},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "form": "infix",
                        "accent": true,
                        "stretchy": true},
                      "properties": {},
                      "childNodes": [
                        {"kind": "text",
                          "text": "^"}],
                      "isEmbellished": true}]}],
              "isInferred": true}]},
        {"kind": "mfrac",
          "texClass": null,
          "attributes": {},
          "inherited": {"displaystyle": true,
            "scriptlevel": 0},
          "properties": {},
          "childNodes": [
            {"kind": "mi",
              "texClass": 0,
              "attributes": {},
              "inherited": {"displaystyle": false,
                "scriptlevel": 0,
                "mathvariant": "italic"},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": "θ"}]},
            {"kind": "mi",
              "texClass": 0,
              "attributes": {},
              "inherited": {"displaystyle": false,
                "scriptlevel": 0,
                "mathvariant": "italic"},
              "properties": {"texprimestyle": true},
              "childNodes": [
                {"kind": "text",
                  "text": "b"}]}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Vector_Unit_7', '\\vectorunit*{a}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mover",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0,
                             "accent": true},
               "properties": {},
               "childNodes": [
                 {"kind": "mi",
                  "texClass": 0,
                      "attributes": {"mathvariant": "bold-italic"},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "mathvariant": "italic"},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "a"}]},
                    {"kind": "mo",
                      "texClass": 3,
                      "attributes": {"stretchy": false},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "form": "infix",
                        "accent": true,
                        "stretchy": true},
                      "properties": {},
                      "childNodes": [
                        {"kind": "text",
                          "text": "^"}],
                      "isEmbellished": true}]}],
              "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Vector_Unit_8', '\\vu*{a}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mover",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0,
                             "accent": true},
               "properties": {},
               "childNodes": [
                 {"kind": "mi",
                  "texClass": 0,
                      "attributes": {"mathvariant": "bold-italic"},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "mathvariant": "italic"},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "a"}]},
                    {"kind": "mo",
                      "texClass": 3,
                      "attributes": {"stretchy": false},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "form": "infix",
                        "accent": true,
                        "stretchy": true},
                      "properties": {},
                      "childNodes": [
                        {"kind": "text",
                          "text": "^"}],
                      "isEmbellished": true}]}],
              "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Vector_Unit_9', '\\vu*{2}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mover",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0,
                             "accent": true},
               "properties": {},
               "childNodes": [
                 {"kind": "mn",
                      "texClass": 0,
                      "attributes": {"mathvariant": "bold-italic"},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "2"}]},
                    {"kind": "mo",
                      "texClass": 3,
                      "attributes": {"stretchy": false},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "form": "infix",
                        "accent": true,
                        "stretchy": true},
                      "properties": {},
                      "childNodes": [
                        {"kind": "text",
                          "text": "^"}],
                      "isEmbellished": true}]}],
              "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Vector_Unit_10', '\\vu*{\\Gamma}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mover",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0,
                             "accent": true},
               "properties": {},
               "childNodes": [
                 {"kind": "mi",
                  "texClass": 0,
                      "attributes": {"mathvariant": "bold-italic"},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "mathvariant": "italic"},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "Γ"}]},
                    {"kind": "mo",
                      "texClass": 3,
                      "attributes": {"stretchy": false},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "form": "infix",
                        "accent": true,
                        "stretchy": true},
                      "properties": {},
                      "childNodes": [
                        {"kind": "text",
                          "text": "^"}],
                      "isEmbellished": true}]}],
              "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Vector_Unit_11', '\\vu*{\\theta}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mover",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0,
                             "accent": true},
               "properties": {},
               "childNodes": [
                 {"kind": "mi",
                  "texClass": 0,
                      "attributes": {"mathvariant": "bold-italic"},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "mathvariant": "italic"},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "θ"}]},
                    {"kind": "mo",
                      "texClass": 3,
                      "attributes": {"stretchy": false},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "form": "infix",
                        "accent": true,
                        "stretchy": true},
                      "properties": {},
                      "childNodes": [
                        {"kind": "text",
                          "text": "^"}],
                      "isEmbellished": true}]}],
              "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Vector_Unit_12', '\\vu{a}\\hat{a}',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mover",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0,
                             "accent": true},
               "properties": {},
               "childNodes": [
                 {"kind": "mi",
                  "texClass": 0,
                  "attributes": {"mathvariant": "bold"},
                  "inherited": {"displaystyle": true,
                                "scriptlevel": 0,
                                "mathvariant": "italic"},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "text",
                     "text": "a"}]},
                 {"kind": "mo",
                  "texClass": 3,
                  "attributes": {"stretchy": false},
                  "inherited": {"displaystyle": true,
                                "scriptlevel": 0,
                                "form": "infix",
                                "accent": true,
                                "stretchy": true},
                  "properties": {},
                  "childNodes": [
                        {"kind": "text",
                          "text": "^"}],
                      "isEmbellished": true}]}],
              "isInferred": true}]},
        {"kind": "TeXAtom",
          "texClass": 0,
          "attributes": {},
          "inherited": {"displaystyle": true,
            "scriptlevel": 0},
          "properties": {},
          "childNodes": [
            {"kind": "mrow",
              "texClass": 0,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0},
              "properties": {},
              "childNodes": [
                {"kind": "mover",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": true,
                    "scriptlevel": 0,
                    "accent": true},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mi",
                      "texClass": 0,
                      "attributes": {},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "mathvariant": "italic"},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "a"}]},
                    {"kind": "mo",
                      "texClass": 3,
                      "attributes": {"stretchy": false},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "form": "infix",
                        "accent": true,
                        "stretchy": true},
                      "properties": {},
                      "childNodes": [
                        {"kind": "text",
                          "text": "^"}],
                      "isEmbellished": true}]}],
              "isInferred": true}]}],
      "isInferred": true}]}
);


parserTest.printTime();

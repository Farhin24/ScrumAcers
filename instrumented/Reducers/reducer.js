function cov_3didc7dcx() {
  var path = "C:\\Users\\adidi\\Desktop\\FrontendPull\\group7-frontend\\src\\Reducers\\reducer.js";
  var hash = "fa4986980cf8c7d41df0d8c07b2bcaeb130dc260";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\adidi\\Desktop\\FrontendPull\\group7-frontend\\src\\Reducers\\reducer.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 19
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "1": {
        start: {
          line: 10,
          column: 18
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "2": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "3": {
        start: {
          line: 12,
          column: 24
        },
        end: {
          line: 18,
          column: 25
        }
      },
      "4": {
        start: {
          line: 19,
          column: 24
        },
        end: {
          line: 19,
          column: 43
        }
      },
      "5": {
        start: {
          line: 21,
          column: 17
        },
        end: {
          line: 21,
          column: 30
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 18
          },
          end: {
            line: 10,
            column: 19
          }
        },
        loc: {
          start: {
            line: 10,
            column: 47
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 19
          },
          end: {
            line: 10,
            column: 37
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 10,
            column: 25
          },
          end: {
            line: 10,
            column: 37
          }
        }],
        line: 10
      },
      "1": {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 12,
            column: 8
          },
          end: {
            line: 18,
            column: 25
          }
        }, {
          start: {
            line: 19,
            column: 8
          },
          end: {
            line: 19,
            column: 43
          }
        }, {
          start: {
            line: 21,
            column: 8
          },
          end: {
            line: 21,
            column: 30
          }
        }],
        line: 11
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fa4986980cf8c7d41df0d8c07b2bcaeb130dc260"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_3didc7dcx = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_3didc7dcx();
const initialState = (cov_3didc7dcx().s[0]++, {
  username: "",
  userId: "",
  loggedIn: false,
  selectedCategory: "",
  selectedProduct: null,
  empType: ""
});
cov_3didc7dcx().s[1]++;

const authReducer = (state = (cov_3didc7dcx().b[0][0]++, initialState), action) => {
  cov_3didc7dcx().f[0]++;
  cov_3didc7dcx().s[2]++;

  switch (action.type) {
    case "LOGIN":
      cov_3didc7dcx().b[1][0]++;
      cov_3didc7dcx().s[3]++;
      return { ...state,
        username: action.username,
        userId: action.userId,
        empType: action.empType,
        loggedIn: true
      };

    case "LOGOUT":
      cov_3didc7dcx().b[1][1]++;
      cov_3didc7dcx().s[4]++;
      return initialState;

    default:
      cov_3didc7dcx().b[1][2]++;
      cov_3didc7dcx().s[5]++;
      return state;
  }
};

export default authReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlcm5hbWUiLCJ1c2VySWQiLCJsb2dnZWRJbiIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZWxlY3RlZFByb2R1Y3QiLCJlbXBUeXBlIiwiYXV0aFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixNQUFNQSxZQUFZLDRCQUFDO0FBQ2ZDLEVBQUFBLFFBQVEsRUFBQyxFQURNO0FBRWZDLEVBQUFBLE1BQU0sRUFBQyxFQUZRO0FBR2ZDLEVBQUFBLFFBQVEsRUFBQyxLQUhNO0FBSWZDLEVBQUFBLGdCQUFnQixFQUFDLEVBSkY7QUFLZkMsRUFBQUEsZUFBZSxFQUFDLElBTEQ7QUFNZkMsRUFBQUEsT0FBTyxFQUFDO0FBTk8sQ0FBRCxDQUFsQjs7O0FBU0EsTUFBTUMsV0FBVyxHQUFDLENBQUNDLEtBQUssK0JBQUNSLFlBQUQsQ0FBTixFQUFvQlMsTUFBcEIsS0FBNkI7QUFBQTtBQUFBOztBQUMzQyxVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLLE9BQUw7QUFBQTtBQUFBO0FBQWdCLGFBQU8sRUFDSCxHQUFHRixLQURBO0FBRUhQLFFBQUFBLFFBQVEsRUFBQ1EsTUFBTSxDQUFDUixRQUZiO0FBR0hDLFFBQUFBLE1BQU0sRUFBQ08sTUFBTSxDQUFDUCxNQUhYO0FBSUhJLFFBQUFBLE9BQU8sRUFBQ0csTUFBTSxDQUFDSCxPQUpaO0FBS0hILFFBQUFBLFFBQVEsRUFBQztBQUxOLE9BQVA7O0FBT2hCLFNBQUssUUFBTDtBQUFBO0FBQUE7QUFBZ0IsYUFBT0gsWUFBUDs7QUFFaEI7QUFBQTtBQUFBO0FBQVMsYUFBT1EsS0FBUDtBQVZiO0FBWUgsQ0FiRDs7QUFnQkEsZUFBZUQsV0FBZiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICB1c2VybmFtZTpcIlwiLFxyXG4gICAgdXNlcklkOlwiXCIsXHJcbiAgICBsb2dnZWRJbjpmYWxzZSxcclxuICAgIHNlbGVjdGVkQ2F0ZWdvcnk6XCJcIixcclxuICAgIHNlbGVjdGVkUHJvZHVjdDpudWxsLFxyXG4gICAgZW1wVHlwZTpcIlwiXHJcbn1cclxuXHJcbmNvbnN0IGF1dGhSZWR1Y2VyPShzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIFwiTE9HSU5cIiA6ICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTphY3Rpb24udXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6YWN0aW9uLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcFR5cGU6YWN0aW9uLmVtcFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZWRJbjp0cnVlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIkxPR09VVFwiIDogcmV0dXJuIGluaXRpYWxTdGF0ZVxyXG4gICAgICAgXHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aFJlZHVjZXI7Il19
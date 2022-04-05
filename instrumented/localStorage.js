function cov_2brv9lra3l() {
  var path = "C:\\Users\\adidi\\Desktop\\FrontendPull\\group7-frontend\\src\\localStorage.js";
  var hash = "9de00745526af530716d275588468aeb9f38b6d2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\adidi\\Desktop\\FrontendPull\\group7-frontend\\src\\localStorage.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 23
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 14,
          column: 5
        }
      },
      "2": {
        start: {
          line: 5,
          column: 15
        },
        end: {
          line: 5,
          column: 29
        }
      },
      "3": {
        start: {
          line: 6,
          column: 30
        },
        end: {
          line: 6,
          column: 44
        }
      },
      "4": {
        start: {
          line: 7,
          column: 8
        },
        end: {
          line: 9,
          column: 9
        }
      },
      "5": {
        start: {
          line: 8,
          column: 12
        },
        end: {
          line: 8,
          column: 28
        }
      },
      "6": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 42
        }
      },
      "7": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 24
        }
      },
      "8": {
        start: {
          line: 17,
          column: 23
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "9": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 24,
          column: 5
        }
      },
      "10": {
        start: {
          line: 19,
          column: 30
        },
        end: {
          line: 19,
          column: 51
        }
      },
      "11": {
        start: {
          line: 20,
          column: 15
        },
        end: {
          line: 20,
          column: 29
        }
      },
      "12": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 21,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 23
          },
          end: {
            line: 3,
            column: 24
          }
        },
        loc: {
          start: {
            line: 3,
            column: 27
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 17,
            column: 23
          },
          end: {
            line: 17,
            column: 24
          }
        },
        loc: {
          start: {
            line: 17,
            column: 32
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 17
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 8
          },
          end: {
            line: 9,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 7,
            column: 8
          },
          end: {
            line: 9,
            column: 9
          }
        }, {
          start: {
            line: 7,
            column: 8
          },
          end: {
            line: 9,
            column: 9
          }
        }],
        line: 7
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9de00745526af530716d275588468aeb9f38b6d2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2brv9lra3l = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2brv9lra3l();
import SecureLS from 'secure-ls';
cov_2brv9lra3l().s[0]++;
export const loadState = () => {
  cov_2brv9lra3l().f[0]++;
  cov_2brv9lra3l().s[1]++;

  try {
    var ls = (cov_2brv9lra3l().s[2]++, new SecureLS());
    const serializedState = (cov_2brv9lra3l().s[3]++, ls.get('key1'));
    cov_2brv9lra3l().s[4]++;

    if (serializedState === null) {
      cov_2brv9lra3l().b[0][0]++;
      cov_2brv9lra3l().s[5]++;
      return undefined;
    } else {
      cov_2brv9lra3l().b[0][1]++;
    }

    cov_2brv9lra3l().s[6]++;
    return JSON.parse(serializedState);
  } catch (err) {
    cov_2brv9lra3l().s[7]++;
    return undefined;
  }
};
cov_2brv9lra3l().s[8]++;
export const saveState = state => {
  cov_2brv9lra3l().f[1]++;
  cov_2brv9lra3l().s[9]++;

  try {
    const serializedState = (cov_2brv9lra3l().s[10]++, JSON.stringify(state));
    var ls = (cov_2brv9lra3l().s[11]++, new SecureLS());
    cov_2brv9lra3l().s[12]++;
    ls.set('key1', serializedState);
  } catch (err) {}
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsU3RvcmFnZS5qcyJdLCJuYW1lcyI6WyJTZWN1cmVMUyIsImxvYWRTdGF0ZSIsImxzIiwic2VyaWFsaXplZFN0YXRlIiwiZ2V0IiwidW5kZWZpbmVkIiwiSlNPTiIsInBhcnNlIiwiZXJyIiwic2F2ZVN0YXRlIiwic3RhdGUiLCJzdHJpbmdpZnkiLCJzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE9BQU9BLFFBQVAsTUFBcUIsV0FBckI7O0FBRUEsT0FBTyxNQUFNQyxTQUFTLEdBQUMsTUFBSTtBQUFBO0FBQUE7O0FBQ3ZCLE1BQUc7QUFDQyxRQUFJQyxFQUFFLDZCQUFDLElBQUlGLFFBQUosRUFBRCxDQUFOO0FBQ0EsVUFBTUcsZUFBZSw2QkFBQ0QsRUFBRSxDQUFDRSxHQUFILENBQU8sTUFBUCxDQUFELENBQXJCO0FBRkQ7O0FBR0MsUUFBR0QsZUFBZSxLQUFHLElBQXJCLEVBQTBCO0FBQUE7QUFBQTtBQUN0QixhQUFPRSxTQUFQO0FBQ0gsS0FGRDtBQUFBO0FBQUE7O0FBSEQ7QUFPQyxXQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osZUFBWCxDQUFQO0FBQ0gsR0FSRCxDQVFDLE9BQU1LLEdBQU4sRUFBVTtBQUFBO0FBQ1AsV0FBT0gsU0FBUDtBQUNIO0FBQ0osQ0FaTTs7QUFjUCxPQUFPLE1BQU1JLFNBQVMsR0FBRUMsS0FBRCxJQUFTO0FBQUE7QUFBQTs7QUFDNUIsTUFBRztBQUNDLFVBQU1QLGVBQWUsOEJBQUNHLElBQUksQ0FBQ0ssU0FBTCxDQUFlRCxLQUFmLENBQUQsQ0FBckI7QUFDQSxRQUFJUixFQUFFLDhCQUFDLElBQUlGLFFBQUosRUFBRCxDQUFOO0FBRkQ7QUFHQ0UsSUFBQUEsRUFBRSxDQUFDVSxHQUFILENBQU8sTUFBUCxFQUFjVCxlQUFkO0FBQ0gsR0FKRCxDQUlDLE9BQU1LLEdBQU4sRUFBVSxDQUVWO0FBQ0osQ0FSTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWN1cmVMUyBmcm9tICdzZWN1cmUtbHMnXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZFN0YXRlPSgpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgdmFyIGxzPW5ldyBTZWN1cmVMUygpXHJcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZFN0YXRlPWxzLmdldCgna2V5MScpXHJcbiAgICAgICAgaWYoc2VyaWFsaXplZFN0YXRlPT09bnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc2VyaWFsaXplZFN0YXRlKVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZVN0YXRlPShzdGF0ZSk9PntcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemVkU3RhdGU9SlNPTi5zdHJpbmdpZnkoc3RhdGUpXHJcbiAgICAgICAgdmFyIGxzPW5ldyBTZWN1cmVMUygpXHJcbiAgICAgICAgbHMuc2V0KCdrZXkxJyxzZXJpYWxpemVkU3RhdGUpXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuXHJcbiAgICB9XHJcbn0iXX0=
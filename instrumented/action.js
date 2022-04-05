function cov_2s0xir2bc() {
  var path = "C:\\Users\\adidi\\Desktop\\FrontendPull\\group7-frontend\\src\\action.js";
  var hash = "ef1c86fd81084e4dfe510676c3105c80a2e9ea4e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\adidi\\Desktop\\FrontendPull\\group7-frontend\\src\\action.js",
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
          line: 2,
          column: 4
        },
        end: {
          line: 7,
          column: 5
        }
      },
      "2": {
        start: {
          line: 10,
          column: 20
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "3": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 13,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 19
          },
          end: {
            line: 1,
            column: 20
          }
        },
        loc: {
          start: {
            line: 1,
            column: 43
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 20
          },
          end: {
            line: 10,
            column: 21
          }
        },
        loc: {
          start: {
            line: 10,
            column: 24
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ef1c86fd81084e4dfe510676c3105c80a2e9ea4e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2s0xir2bc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2s0xir2bc();
cov_2s0xir2bc().s[0]++;
export const login = (user, userid, emp_type) => {
  cov_2s0xir2bc().f[0]++;
  cov_2s0xir2bc().s[1]++;
  return {
    type: "LOGIN",
    username: user,
    userId: userid,
    empType: emp_type
  };
};
cov_2s0xir2bc().s[2]++;
export const logout = () => {
  cov_2s0xir2bc().f[1]++;
  cov_2s0xir2bc().s[3]++;
  return {
    type: "LOGOUT"
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsInVzZXIiLCJ1c2VyaWQiLCJlbXBfdHlwZSIsInR5cGUiLCJ1c2VybmFtZSIsInVzZXJJZCIsImVtcFR5cGUiLCJsb2dvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWixPQUFPLE1BQU1BLEtBQUssR0FBQyxDQUFDQyxJQUFELEVBQU1DLE1BQU4sRUFBYUMsUUFBYixLQUF3QjtBQUFBO0FBQUE7QUFDdkMsU0FBTztBQUNIQyxJQUFBQSxJQUFJLEVBQUUsT0FESDtBQUVIQyxJQUFBQSxRQUFRLEVBQUVKLElBRlA7QUFHSEssSUFBQUEsTUFBTSxFQUFFSixNQUhMO0FBSUhLLElBQUFBLE9BQU8sRUFBQ0o7QUFKTCxHQUFQO0FBTUgsQ0FQTTs7QUFTUCxPQUFPLE1BQU1LLE1BQU0sR0FBQyxNQUFJO0FBQUE7QUFBQTtBQUNwQixTQUFPO0FBQ0hKLElBQUFBLElBQUksRUFBRTtBQURILEdBQVA7QUFHSCxDQUpNIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGxvZ2luPSh1c2VyLHVzZXJpZCxlbXBfdHlwZSk9PntcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJMT0dJTlwiLFxyXG4gICAgICAgIHVzZXJuYW1lOiB1c2VyLFxyXG4gICAgICAgIHVzZXJJZDogdXNlcmlkLFxyXG4gICAgICAgIGVtcFR5cGU6ZW1wX3R5cGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dD0oKT0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIkxPR09VVFwiXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
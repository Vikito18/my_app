const classNames = (defaultClassNames = "", { className = "" } = {}) => ({
  className: [
    ...new Set(defaultClassNames.split(/\s+/).concat(className.split(/\s+/))),
  ].join(" "),
})

export default classNames

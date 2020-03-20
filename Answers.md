# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

ReactJs is used for building user interfaces specifically for single page applications. It is declaritive. When changes in data occur React is aware of how to update it.

2. What does it mean to think in react?

) Break the UI into a component hierachy
) Build a static version in React
) Identify the minimal representation of UI state
) Identify where your state should live
) Add inverse Data Flow

3. Describe state.

values managed within a component

4. Describe props.

short for properties they are single values or objects containing a set of values that are passed to react components

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Anything that affects something outside the scope of the current function you sync them
by using useEffect (() => {
  
})

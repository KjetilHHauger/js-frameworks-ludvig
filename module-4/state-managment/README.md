# How can we store data

### variables ( const,let)

pros:

- Temporary

cons:

- Temporary
- Application does not react to the variable changing
- can`t be passed when opening in new tab(refresh)

### useStates

- can`t be passed when opening in new tab(refresh)
  -local to component, makes things more readable. easier to edit

### stateStores(Zustand,redux, context)

- can`t be passed when opening in new tab(refresh)
- global state, can access everywhere
- more side effects
- code can be harder to read when it gets complicated

### localStorage (5mb)

pros:

- can be passed when opening in new tab

cons:

- Security
- Bugs persist

### sessionStorage (5mb)

### url(queries, params)

pros:
can send information to other people
save

### cookies (but not prefered for front end(4kb data(less than 4 000 chars)))

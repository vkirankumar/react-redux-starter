import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
    const compose_Enhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
    return createStore(
        rootReducer, 
        initialState, 
        //Warn if we accidentally mutate a state object.
        compose_Enhancers(applyMiddleware(reduxImmutableStateInvariant())));
}
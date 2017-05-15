/**
 * Created by tianzx on 2017/5/15.
 */
const msgpack = require("msgpack-lite");


function msgpack_middleware({ getState }) {
  return (next) => (action) => {

    const prevState = getState();
    console.log(prevState)
    const returnValue =  next({
      ...data ? { payload: msgpack.decode(prevState.payload.data) } : {},
    });
    return returnValue;
  };
}

export default msgpack_middleware;

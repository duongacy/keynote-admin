function flattenArray(obj) {
  console.log(obj[0]);
  return obj.map((e) => flatten(e));
}

function flattenData(obj) {
  return flatten(obj.data);
}

function flattenAttrs(obj) {
  let attrs = {};
  for (let key in obj.attributes) {
    attrs[key] = flatten(obj.attributes[key]);
  }
  return {
    id: obj.id,
    ...attrs,
  };
}

function flatten(obj) {
  if (obj === null || obj === undefined) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return flattenArray(obj);
  }
  if (obj.data) {
    return flattenData(obj);
  }
  if (obj.attributes) {
    return flattenAttrs(obj);
  }
  return obj
}

async function respond(ctx, next) {
  await next();
  if (!ctx.url.startsWith("/api")) {
    return;
  }
  console.log(
    `API request (${ctx.url}) detected, transforming response json...`
  );
  ctx.response.body = {
    data: flatten(ctx.response.body.data),
    meta: ctx.response.body.meta,
  };
}

module.exports = () => respond;

// export const current = query({
//   args: {},
//   handler: async (ctx) => {
//     // Convex automatically unpacks the 'better-auth.convex_jwt' cookie here
//     const identity = await ctx.auth.getUserIdentity()
//     if (!identity) return null

//     // Fetch the full user from your database using the token subject (userId)
//     return await ctx.db
//       .query('users')
//       .filter((q) => q.eq(q.field('email'), identity.email))
//       .unique()
//   },
// })

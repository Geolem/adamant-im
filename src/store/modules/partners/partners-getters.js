export default {
  /**
   * Gets partner display name or `undefined` if one is not set
   */
  displayName: state => partner => {
      console.log('Getters-displayName:')
      console.log('partner: ' + partner)
      console.log('state.list[partner]: ' + state.list[partner])    
      console.log('state.list[partner].displayName: ' + state.list[partner].displayName)    
    return state.list[partner] && state.list[partner].displayName
  },

  /**
   * Gets partner address for the specified crypto or `undefined` if one is not set
   */
  cryptoAddress: state => (partner, crypto) => state.list[partner] && state.list[partner][crypto]
}

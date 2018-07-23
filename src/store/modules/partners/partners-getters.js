export default {
  /**
   * Gets partner display name or `undefined` if one is not set
   */
  displayName: state => partner => {

    if (partner == 'U438236181740289346') {
      console.log('Getters-displayName=============')
      console.log('partner: ' + partner)
      console.log('state.list obj:')    
      console.log(state.list)    
      console.log('state.list[partner] obj: ')    
      console.log(state.list[partner])    
    }
    
    if (state.list[partner]) {
      if (partner == 'U438236181740289346') {
        console.log('NOT NULL, state.list[partner].displayName: ' + state.list[partner].displayName)    
      }  
      return state.list[partner].displayName
    }
    else {
    if (partner == 'U438236181740289346') {
      console.log('NULL')    
    }  
      return null
    }
  },

  /**
   * Gets partner address for the specified crypto or `undefined` if one is not set
   */
  cryptoAddress: state => (partner, crypto) => state.list[partner] && state.list[partner][crypto]
}

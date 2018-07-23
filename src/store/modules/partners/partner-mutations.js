import { resetState } from '../../../lib/reset-state'
import initialState from './partners-state'

export default {
  /** Resets module state */
  reset (state) {
    console.log('Mutations-reset:')
    resetState(state, initialState)
  },

  /**
   * Sets partner display name
   * @param {object} state current state
   * @param {{partner: string, displayName: string}} payload partner address and display name
   */
  displayName (state, { partner, displayName }) {
      console.log('Mutations-displayName:')
      console.log('partner: ' + partner)
      console.log('displayName: ' + displayName)    

    
    state.list[partner] = Object.assign({ }, state.list[partner], { displayName })

          console.log('state.list[partner]: ' + state.list[partner])    
    state.lastChange = Date.now()
  },

  /**
   * Sets partner address for the specified crypto
   * @param {object} state current state
   * @param {{partner: string, crypto: string, address: string}} payload partner ADM address, crypto and crypto address
   */
  address (state, payload) {
    console.log('Mutations-address:')
      console.log('state.list[payload.partner] obj BEFORE: ')
      console.log(state.list[payload.partner])
    
    state.list[payload.partner] = Object.assign({ }, state.list[payload.partner], { [payload.crypto]: payload.address })

    console.log('state.list[payload.partner] obj AFTER: ')
    console.log(state.list[payload.partner])    
  },

  /**
   * Sets contact list data, retrieved from server
   * @param {object} state current state
   * @param {Object.<string, {displayName: string}>} contacts contacts list
   */
  contactList (state, contacts) {
    console.log('Mutations-contactList:')
    if (!contacts) return
    Object.keys(contacts).forEach(uid => {
      state.list[uid] = Object.assign({ }, state.list[uid], contacts[uid])
    })
    state.lastUpdate = Date.now()
  }
}

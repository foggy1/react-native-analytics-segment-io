import { NativeModules } from 'react-native'

const RNASegmentIO = NativeModules.RNASegmentIO || NativeModules.SegmentModule

export default {
  setup: function (key, options = {}) {
    return RNASegmentIO.setup(key, options)
  },

  identify: function (userId, traits = {}, context = {}, integrations = {}) {
    RNASegmentIO.identify(userId, traits, context, integrations)
  },

  track: function (event, properties = {}, context = {}, integrations = {}) {
    RNASegmentIO.track(event, properties, context, integrations)
  },

  screen: function (name, properties = {}, context = {}, integrations = {}) {
    RNASegmentIO.screen(name, properties, context, integrations)
  },

  group: function (groupId, traits = {}, context = {}, integrations = {}) {
    RNASegmentIO.group(groupId, traits, context, integrations)
  },

  alias: function (newId, context = {}, integrations = {}) {
    RNASegmentIO.alias(newId, context, integrations)
  },

  reset: function () {
    RNASegmentIO.reset()
  },

  flush: function () {
    RNASegmentIO.flush()
  },

  enable: function () {
    RNASegmentIO.enable()
  },

  disable: function () {
    RNASegmentIO.disable()
  }
}

export const AnalyticsConstants = {
  enableAdvertisingTracking: RNASegmentIO.enableAdvertisingTracking,
  flushAt: RNASegmentIO.flushAt,
  recordScreenViews: RNASegmentIO.recordScreenViews,
  shouldUseBluetooth: RNASegmentIO.shouldUseBluetooth,
  shouldUseLocationServices: RNASegmentIO.shouldUseLocationServices,
  trackApplicationLifecycleEvents: RNASegmentIO.trackApplicationLifecycleEvents,
  trackAttributionData: RNASegmentIO.trackAttributionData,
  trackDeepLinks: RNASegmentIO.trackDeepLinks,
  debug: RNASegmentIO.debug,
}

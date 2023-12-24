import type { Schema, Attribute } from '@strapi/strapi';

export interface ScheduleTimeSlot extends Schema.Component {
  collectionName: 'components_schedule_time_slots';
  info: {
    displayName: 'timeSlot';
    icon: 'clock';
    description: '';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    start: Attribute.Time & Attribute.Required;
    end: Attribute.Time & Attribute.Required;
    speaker: Attribute.Relation<
      'schedule.time-slot',
      'oneToOne',
      'api::speaker.speaker'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'schedule.time-slot': ScheduleTimeSlot;
    }
  }
}

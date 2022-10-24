import { gql } from "@apollo/client";

export const QUERY_CONFERENCES = gql`
query Conferences {
  conferences {
    id
    name
  }
}
`;

export const QUERY_CONFERENCE_WITH_ID = gql`
query Conference($id: ID!) {
  conference(id: $id) {
    id
    name
    organizers {
      name
      aboutShort
      company
      image {
        url
      }
    }
    speakers {
      name
      aboutShort
      company
      image {
        url
      }
    }
    locations {
      name
      about
      address
      image {
        url
      }
    }
    schedules {
      day
      location {
        name
        about
        image {
          url
        }
      }
    }
    sponsors {
      name
      aboutShort
      company
      image {
        url
      }
    }
  }
}
`;
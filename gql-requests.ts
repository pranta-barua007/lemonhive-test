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
    slogan
    organizers {
      name
      about
      company
      image {
        url
      }
    }
    speakers {
      name
      about
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
      about
      company
      image {
        url
      }
    }
  }
}
`;
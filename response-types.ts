export type ConferenceType = {
    id: string,
    name: string,
  }

type Image = {
    url: string
}

export type ContactType = {
    name: string,
    about?: string,
    aboutShort?: string,
    company?: string | null,
    image: Image
}

export interface LocationType extends ContactType {
    address?: string
}
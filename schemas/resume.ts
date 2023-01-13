export default {
  name: 'resume',
  title: 'Resume Information',
  type: 'document',
  preview: {
    select: {
      image: 'user.profilePicture',
      title: 'user.fullName',
    },
    prepare(selection : { image: string, title: string }) {
      
      return {
        media: selection.image,
        title: selection.title,
        subtitle: 'current',
      }
    },
  },  
  fields: [
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: {type: 'user'},
    },
    {
      name: 'workhistorys',
      title: 'Work History',
      type: 'array',
      of: [{type: 'reference', to: {type: 'workHistory'}}],
    },
    {
      name: 'educations',
      title: 'Education',
      type: 'array',
      of: [{type: 'reference', to: {type: 'education'}}],
    },
    {
      name: 'additionalTrainings',
      title: 'Additional Training - General knoledge',
      type: 'array',
      of: [{type: 'reference', to: {type: 'additionalTrainings'}}],
    },
  ]
}

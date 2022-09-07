export default function () {
  return {
    listStudySet: [],
    listStudySetInClass: [
      {
        folderId: 'thu-muc-001',
        name: 'Thư mục 1',
        type: 0,
        childClass: [
          {
            id: 'sinh-hoc-12',
            className: 'Python',
            name: 'Sinh học 12',
            userName: 'TungTT',
            numberOfKeyword: 12,
            isOwner: true,
            isCanEdit: true,
            isInMyClass: true,
            type: 1,
          },
          {
            id: 'sinh-hoc-11',
            className: 'Python',
            name: 'Sinh học 11',
            userName: 'TungTT',
            numberOfKeyword: 12,
            isOwner: true,
            isCanEdit: true,
            isInMyClass: false,
            type: 1,
          },
        ],
      },
      {
        folderId: 'thu-muc-002',
        name: 'Thư mục 2',
        type: 0,
        childClass: [
          {
            id: '1234556',
            className: 'Python',
            name: 'Java',
            userName: 'TungTT',
            numberOfKeyword: 12,
            isOwner: false,
            isCanEdit: false,
            isInMyClass: true,
            type: 1,
          },
        ],
      },
    ],
    studySetStateOption: {
      label: 'Học phần của bạn',
      value: 'your_study_set',
    },
  }
}

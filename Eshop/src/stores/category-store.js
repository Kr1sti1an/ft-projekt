import { defineStore } from 'pinia'
import clothesImage from '@/components/img/clothes.jpg'
import supplementsImage from '@/components/img/supplements.jpg'
import accessoriesImage from '@/components/img/accessories.jpg'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [
      {
        name: 'Oblečenie',
        description:
          'Preskúmajte kolekciu oblečenia, navrhnutého pre maximálny komfort pri všetkých formách cvičenia.',
        imageSrc: clothesImage,
        imageAlt:
          'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        to: '/clothes'
      },
      {
        name: 'Suplementy',
        description:
          'Preskúmajte našu širokú škálu kvalitných doplnkov výživy pre podporu vášho zdravia a kondície.',
        imageSrc: supplementsImage,
        imageAlt:
          'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        to: '/supplements'
      },
      {
        name: 'Vybavenie',
        description:
          'Prehľadajte našu exkluzívnu kolekciu fitness vybavenia určeného pre efektívne a bezpečné tréningové rutiny.',
        imageSrc: accessoriesImage,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        to: '/accessories'
      }
    ]
  })
})

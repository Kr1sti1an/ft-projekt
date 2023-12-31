import { defineStore } from 'pinia'   //vytvorenie noveho store
import clothesImage from '@/components/img/clothes.jpg'
import supplementsImage from '@/components/img/supplements.jpg'
import accessoriesImage from '@/components/img/accessories.jpg'

export const useCategoryStore = defineStore('category', {
  state: () => ({     //state definuje počiatočny stav storu
    categories: [     //pole objektov, kde každy objekt predstavuje kategoriu
      {
        name: 'Oblečenie',
        description:
          'Preskúmajte kolekciu oblečenia, navrhnutého pre maximálny komfort pri všetkých formách cvičenia.',
        imageSrc: clothesImage,
        to: '/clothes'
      },
      {
        name: 'Suplementy',
        description:
          'Preskúmajte našu širokú škálu kvalitných doplnkov výživy pre podporu vášho zdravia a kondície.',
        imageSrc: supplementsImage,
        to: '/supplements'
      },
      {
        name: 'Vybavenie',
        description:
          'Prehľadajte našu exkluzívnu kolekciu fitness vybavenia určeného pre efektívne a bezpečné tréningové rutiny.',
        imageSrc: accessoriesImage,
        to: '/accessories'
      }
    ]
  })
})

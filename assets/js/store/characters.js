import {defineStore} from 'pinia'
import { Notify } from 'quasar'

export const useCharacterStore = defineStore(
    'characters',
    {
        state: () => ({
            bookmarks: [],
        }),
        getters: {
            inBookmarks: (state) => {
                return (char) => char && state.bookmarks.findIndex( (c) => parseInt(c.id) === parseInt(char.id))>-1
            }
        },
        actions: {
            addBookmark(character) {
                this.bookmarks.push(character) 
                Notify.create({
                    message: character.name + ' a été ajouté aux favoris',
                    icon: 'bookmark_added'
                })
            },
            removeBookmark(character) {
                this.bookmarks.splice(this.bookmarks.findIndex( (c) => c.id === character.id), 1)
                Notify.create({
                    message: character.name + ' a été supprimé des favoris',
                    icon: 'bookmark_remove'
                })
            }
        }
    }
)
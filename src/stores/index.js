import { defineStore } from 'pinia'

export const useIndexStore = defineStore({
  id: 'index',
  state: () => ({
    isOverlayVisible: false,
    isMobileMenuVisible: false,
    isModalSearchProductVisible: false,
    isMobileFilterProductSidebarVisible: false,
    isModalConfirmRemoveCartItemVisible: false,
    pageLoading: false,
    productsLoading: true
  }),
  actions: {
    showProductsLoading() {
      this.productsLoading = true
    },
    hideProductsLoading() {
      this.productsLoading = false
    },
    togglePageLoading() {
      this.pageLoading = !this.pageLoading
    },
    hidePageLoading() {
      this.pageLoading = false
    },
    toggleOverlay() {
      this.isOverlayVisible = !this.isOverlayVisible
    },
    toggleMobileMenu() {
      this.isMobileMenuVisible = !this.isMobileMenuVisible
    },
    toggleSearchModal() {
      this.isModalSearchProductVisible = !this.isModalSearchProductVisible
      const indexStore = useIndexStore()
      indexStore.toggleOverlay()
    },
    toggleMobileFilterProductSidebar() {
      this.isMobileFilterProductSidebarVisible = !this.isMobileFilterProductSidebarVisible
      const indexStore = useIndexStore()
      indexStore.toggleOverlay()
    },
    toggleModalConfirmRemoveCartItem() {
      this.isModalConfirmRemoveCartItemVisible = !this.isModalConfirmRemoveCartItemVisible
      const indexStore = useIndexStore()
      indexStore.toggleOverlay()
    }
  }
})

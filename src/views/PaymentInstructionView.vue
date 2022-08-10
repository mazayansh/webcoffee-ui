<script setup>
import IconCreditCard from "@/components/icons/IconCreditCard.vue"
import IconChevronDown from "@/components/icons/IconChevronDown.vue"
import { useOrderStore } from "@/stores/order.js"
import { storeToRefs } from "pinia"
import { ref } from "vue"

const props = defineProps(['orderId'])

if (props.orderId) {
    const { fetchPaymentDetails } = useOrderStore()
    fetchPaymentDetails(props.orderId)
}

const { paymentDetails } = storeToRefs(useOrderStore())
let selectedBank = ref('')
selectedBank.value = paymentDetails.value.bank ?? 'bri'
</script>

<template>
	<main class="grow">
		<div class="lg:flex lg:flex-row-reverse">
	        <div class="p-4 md:w-8/12 mx-auto">
	            <div class="pt-4 lg:w-10/12 lg:mx-auto lg:p-10">
	            	<div class="flex flex-col gap-y-2 pb-4 mb-4 border-b border-b-neutral-300">
	            		<div class="flex justify-between items-center">
	            			<span class="font-semibold">{{ paymentDetails.payment_method }}</span>
	            			<div v-if="paymentDetails.bank" class="w-28 lg:w-32">
	            				<img :src="`../src/assets/images/${paymentDetails.bank}.png`" class="w-full" />
	            			</div>
	            		</div>
	            		<div class="flex justify-between items-center">
	            			<div v-if="paymentDetails.va_number">
	            				<span class="block text-neutral-500">Nomor Virtual Account</span>
	            				<span class="font-bold">{{ paymentDetails.va_number}}</span>
	            			</div>
	            			<div v-else>
	            				<span class="block text-neutral-500">Nomor Bill Key</span>
	            				<span class="font-bold">{{ `${paymentDetails.bill_key} - Biller Code: ${paymentDetails.biller_code}` }}</span>
	            			</div>
	            		</div>
	            		<div class="flex justify-between items-center">
	            			<div>
	            				<span class="block text-neutral-500">Total Pembayaran</span>
	            				<span class="font-bold">{{ $filters.formatRupiah(parseInt(paymentDetails.total_payment)) }}</span>
	            			</div>
	            		</div>
	            	</div>

	            	<div>
	            		<p>Silakan <router-link :to="{name:'login'}" class="underline">login</router-link> atau <router-link :to="{name:'register'}" class="underline">buat akun</router-link> untuk melihat detail pesanan dan status pembayaran</p>
	            	</div>

	                <h1 class="font-bold text-lg mt-12">Petunjuk Pembayaran</h1>

	                <div class="pt-10">

	                	<!-- bri -->
	                	<div v-if="selectedBank == 'bri'" class="flex flex-col gap-y-4">
                            <div class="flex gap-x-4 items-center">
                            	<div class="w-28">
                            		<img src="../assets/images/bri.png" class="w-full" />
                            	</div>
                                <p class="text-lg">BRI Virtual Account</p>
                            </div>
                            <div class="px-4 border border-neutral-300 rounded-md">
                                <div>
                                    <div class="table py-4">
                                        <div class="table-cell pr-3 whitespace-nowrap">
                                            <span class="font-semibold">1.</span>
                                        </div>
                                        <label for="not-same-as-shipping-address" class="table-cell w-full cursor-pointer">
                                            <span class="table-cell w-full font-semibold">
                                                Melalui ATM BRI
                                            </span>
                                        </label>
                                    </div>
                                    <div class="pl-10 pr-4 pb-4 border-t border-t-gray-200">
                                        <ul class="list-disc pt-4">
                                        	<li class="mb-2">Masukkan kartu dan ketikkan nomor PIN di ATM BRI</li>
                                        	<li class="mb-2">Setelah memasukkan PIN ATM BRI, pilih menu ‘Transaksi Lain’.</li>
                                        	<li class="mb-2">Masuk ke menu ‘Pembayaran’, lalu klik ‘Lainnya’.</li>
                                        	<li class="mb-2">Pilih opsi ‘BRIVA’ dan ketikkan kode BRIVA yang sudah didapat. Pastikan seluruh detail transaksi sudah sesuai sebelum memproses transaksi.</li>
                                        	<li class="mb-2">Lanjutkan pembayaran dengan klik ‘Ya’.</li>
                                        	<li class="mb-2">Transaksi dengan BRIVA selesai. Tunggu hingga bukti pembayaran berhasil keluar.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 border border-neutral-300 rounded-md">
                                <div>
                                    <div class="table py-4">
                                        <div class="table-cell pr-3 whitespace-nowrap">
                                            <span class="font-semibold">2.</span>
                                        </div>
                                        <label for="not-same-as-shipping-address" class="table-cell w-full cursor-pointer">
                                            <span class="table-cell w-full font-semibold">
                                                Melalui BRImo
                                            </span>
                                        </label>
                                    </div>
                                    <div class="pl-10 pr-4 pb-4 border-t border-t-gray-200">
                                        <ul class="list-disc pt-4">
                                        	<li class="mb-2">Login ke aplikasi BRImo</li>
                                        	<li class="mb-2">Pada halaman beranda, masuk ke menu ‘Pembayaran’.</li>
                                        	<li class="mb-2">Ketikkan kode BRIVA yang sudah diperoleh. Pastikan nominal yang ditampilkan sudah sesuai sebelum memproses transaksi.</li>
                                        	<li class="mb-2">Masukkan PIN BRImo.</li>
                                        	<li class="mb-2">Sistem akan langsung memproses transaksi. Jika transaksi sukses, sistem akan langsung memberikan notifikasi di BRImo.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- bni -->
	                	<div v-if="selectedBank == 'bni'" class="flex flex-col gap-y-4">
                            <div class="flex gap-x-4 items-center">
                            	<div class="w-28">
                            		<img src="../assets/images/bni.png" class="w-full" />
                            	</div>
                                <p class="text-lg">BNI Virtual Account</p>
                            </div>
                            <div class="px-4 border border-neutral-300 rounded-md">
                                <div>
                                    <div class="table py-4">
                                        <div class="table-cell pr-3 whitespace-nowrap">
                                            <span class="font-semibold">1.</span>
                                        </div>
                                        <label for="not-same-as-shipping-address" class="table-cell w-full cursor-pointer">
                                            <span class="table-cell w-full font-semibold">
                                                Melalui ATM BNI
                                            </span>
                                        </label>
                                    </div>
                                    <div class="pl-10 pr-4 pb-4 border-t border-t-gray-200">
                                        <ul class="list-disc pt-4">
                                        	<li class="mb-2">Masukkan kartu, pilih bahasa kemudian ketikkan 6 digit PIN ATM</li>
                                        	<li class="mb-2">Pilih menu Lainnya</li>
                                        	<li class="mb-2">Pilih Transfer kemudian pilih jenis rekening yang akan digunakan (misalnya Tabungan)</li>
                                        	<li class="mb-2">Pilih Virtual Account Billing kemudian masukkan 16 digit nomornya. Jumlah yang harus dibayar akan muncul pada layar konfirmasi</li>
                                        	<li class="mb-2">Jika sudah sesuai, lanjutkan transaksi dan simpan bukti transfer.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 border border-neutral-300 rounded-md">
                                <div>
                                    <div class="table py-4">
                                        <div class="table-cell pr-3 whitespace-nowrap">
                                            <span class="font-semibold">2.</span>
                                        </div>
                                        <label for="not-same-as-shipping-address" class="table-cell w-full cursor-pointer">
                                            <span class="table-cell w-full font-semibold">
                                                Melalui Mobile Banking BNI
                                            </span>
                                        </label>
                                    </div>
                                    <div class="pl-10 pr-4 pb-4 border-t border-t-gray-200">
                                        <ul class="list-disc pt-4">
                                        	<li class="mb-2">Buka aplikasi BNI Mobile Banking lewat ponsel</li>
                                        	<li class="mb-2">Isi user ID dan password</li>
                                        	<li class="mb-2">Setelah terbuka, pilih menu Transfer kemudian tekan pilihan Virtual Account Billing</li>
                                        	<li class="mb-2">Pilih rekening debet kemudian pilih input baru dan masukkan 16 digit nomor virtual account</li>
                                        	<li class="mb-2">Jumlah tagihan akan muncul di layar. Lakukan konfirmasi kemudian ketikkan Password Transaksi</li>
                                        	<li class="mb-2">Pembayaran selesai</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 border border-neutral-300 rounded-md">
                                <div>
                                    <div class="table py-4">
                                        <div class="table-cell pr-3 whitespace-nowrap">
                                            <span class="font-semibold">3.</span>
                                        </div>
                                        <label for="not-same-as-shipping-address" class="table-cell w-full cursor-pointer">
                                            <span class="table-cell w-full font-semibold">
                                                Melalui iBank Personal
                                            </span>
                                        </label>
                                    </div>
                                    <div class="pl-10 pr-4 pb-4 border-t border-t-gray-200">
                                        <ul class="list-disc pt-4">
                                        	<li class="mb-2">Buka browser kemudian akses ibank.bni.co.id</li>
                                        	<li class="mb-2">Isi kolom user ID dan password</li>
                                        	<li class="mb-2">Pilih menu Transfer kemudian klik pada pilihan Virtual Account Billing</li>
                                        	<li class="mb-2">Masukkan nomor virtual account yang dituju dan pilih rekening yang akan digunakan untuk membayar</li>
                                        	<li class="mb-2">Jumlah tagihan akan muncul pada layar konfirmasi. Jika sudah cocok, lanjutkan transaksi</li>
                                        	<li class="mb-2">Masukkan token atau Kode Otentikasi Token</li>
                                        	<li class="mb-2">Jika transaksi sukses, Anda akan memperoleh notifikasi.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

	                	<!-- bca -->
                        <div v-if="selectedBank == 'bca'" class="flex flex-col gap-y-4">
                            <div class="flex gap-x-4 items-center">
                            	<div class="w-28">
                            		<img src="../assets/images/bca.png" class="w-full" />
                            	</div>
                                <p class="text-lg">BCA Virtual Account</p>
                            </div>
                            <div class="px-4 border border-neutral-300 rounded-md">
                                <div>
                                    <div class="table py-4">
                                        <div class="table-cell pr-3 whitespace-nowrap">
                                            <span class="font-semibold">1.</span>
                                        </div>
                                        <label for="not-same-as-shipping-address" class="table-cell w-full cursor-pointer">
                                            <span class="table-cell w-full font-semibold">
                                                Melalui ATM BCA
                                            </span>
                                        </label>
                                    </div>
                                    <div class="pl-10 pr-4 pb-4 border-t border-t-gray-200">
                                        <ul class="list-disc pt-4">
                                        	<li class="mb-2">Masukkan kartu dan ketikkan nomor PIN di ATM BCA</li>
                                        	<li class="mb-2">Pilih menu “Transaksi Lainnya”, lalu pilih “Transfer”</li>
                                        	<li class="mb-2">Pilih “ke Rekening BCA Virtual Account”</li>
                                        	<li class="mb-2">Masukkan nomor virtual account, kemudian tekan “Benar”</li>
                                        	<li class="mb-2">Masukkan nominal yang akan dibayarkan, lalu tekan “Benar” lagi</li>
                                        	<li class="mb-2">Setelah layar menampilkan informasi pembayaran, silakan cek kembali nomor virtual account, total pembayaran, serta informasi lainnya</li>
                                        	<li class="mb-2">Jika seluruhnya sesuai, maka tekan “Ya”</li>
                                        	<li class="mb-2">Pembayaran pun selesai</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 border border-neutral-300 rounded-md">
                                <div>
                                    <div class="table py-4">
                                        <div class="table-cell pr-3 whitespace-nowrap">
                                            <span class="font-semibold">2.</span>
                                        </div>
                                        <label for="not-same-as-shipping-address" class="table-cell w-full cursor-pointer">
                                            <span class="table-cell w-full font-semibold">
                                                Melalui BCA Mobile
                                            </span>
                                        </label>
                                    </div>
                                    <div class="pl-10 pr-4 pb-4 border-t border-t-gray-200">
                                        <ul class="list-disc pt-4">
                                        	<li class="mb-2">Login ke aplikasi BCA Mobile, lalu pilih “m-BCA” dan masukkan kode akses</li>
                                        	<li class="mb-2">Pilih “m-Transfer”, lalu lanjut ke “BCA Virtual Account”</li>
                                        	<li class="mb-2">Masukkan nomor virtual account lalu masukkan jumlah yang akan dibayarkan</li>
                                        	<li class="mb-2">Masukkan PIN m-BCA</li>
                                        	<li class="mb-2">Pembayaran selesai dilakukan</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 border border-neutral-300 rounded-md">
                                <div>
                                    <div class="table py-4">
                                        <div class="table-cell pr-3 whitespace-nowrap">
                                            <span class="font-semibold">3.</span>
                                        </div>
                                        <label for="not-same-as-shipping-address" class="table-cell w-full cursor-pointer">
                                            <span class="table-cell w-full font-semibold">
                                                Melalui Klik BCA
                                            </span>
                                        </label>
                                    </div>
                                    <div class="pl-10 pr-4 pb-4 border-t border-t-gray-200">
                                    	<p class="font-semibold pt-4">Klik BCA Individu</p>
                                        <ul class="list-disc pt-4">
                                        	<li class="mb-2">Login ke aplikasi Klik BCA Individu, masukkan user ID dan PIN</li>
                                        	<li class="mb-2">Pilih menu “Transfer Dana”, selanjutnya pilih “Transfer ke BCA Virtual Account”</li>
                                        	<li class="mb-2">Masukkan nomor virtual account yang merupakan tujuan pembayaran Anda</li>
                                        	<li class="mb-2">Masukkan jumlah pembayaran dan lakukan validasi untuk memastikan semuanya selesai</li>
                                        	<li class="mb-2">Masukkan kode yang diperoleh dari KEYBCA APPLI 1, kemudian klik “Kirim”</li>
                                        	<li class="mb-2">Transaksi selesai</li>
                                        </ul>
                                        <p class="font-semibold pt-8">Klik BCA Bisnis</p>
                                        <ul class="list-disc pt-4">
                                        	<li class="mb-2">Login ke aplikasi Klik BCA Bisnis, masukkan user ID dan PIN</li>
                                        	<li class="mb-2">Pilih menu “Transfer Dana”, “Daftar Transfer”, lalu “Tambah”</li>
                                        	<li class="mb-2">Masukkan kode virtual account BCA, pilih menu “Kirim”, lalu pilih “Transfer Dana”</li>
                                        	<li class="mb-2">Klik “ke BCA Virtual Account”, lalu pilih rekening sumber dana dan nomor virtual account </li>
                                        	<li class="mb-2">Masukkan jumlah yang akan dibayarkan, pilih “Kirim”</li>
                                        	<li class="mb-2">Lakukan validasi sampai data berhasil di-input lalu pilih “Simpan”</li>
                                        	<li class="mb-2">Pilih “Transfer Dana”, lalu “Otorisasi Transaksi” untuk melanjutkan transaksi sampai selesai</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- mandiri -->
                        <div v-if="selectedBank == 'mandiri'" class="flex flex-col gap-y-4">
                            <div class="flex gap-x-4 items-center">
                            	<div class="w-28">
                            		<img src="../assets/images/mandiri.png" class="w-full" />
                            	</div>
                                <p class="text-lg">Mandiri Bill Payment</p>
                            </div>
                            <div class="px-4 border border-neutral-300 rounded-md">
                                <div>
                                    <div class="table py-4">
                                        <div class="table-cell pr-3 whitespace-nowrap">
                                            <span class="font-semibold">1.</span>
                                        </div>
                                        <label for="not-same-as-shipping-address" class="table-cell w-full cursor-pointer">
                                            <span class="table-cell w-full font-semibold">
                                                Melalui ATM Mandiri
                                            </span>
                                        </label>
                                    </div>
                                    <div class="pl-10 pr-4 pb-4 border-t border-t-gray-200">
                                        <ul class="list-disc pt-4">
                                        	<li class="mb-2">Masukkan kartu dan ketikkan nomor PIN di ATM Mandiri</li>
                                        	<li class="mb-2">Pilih menu Bayar/Beli.</li>
                                        	<li class="mb-2">Pilih opsi Lainnya > Multipayment.</li>
                                        	<li class="mb-2">Masukkan kode biller perusahaan (biasanya sudah tercantum di instruksi pembayaran).</li>
                                        	<li class="mb-2">Masukkan nomor Virtual account > Benar.</li>
                                        	<li class="mb-2">Masukkan angka yang diminta untuk memilih tagihan > Ya.</li>
                                        	<li class="mb-2">Layar akan menampilkan konfirmasi. Jika sesuai, pilih Ya.</li>
                                        	<li class="mb-2">Pembayaran pun selesai</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 border border-neutral-300 rounded-md">
                                <div>
                                    <div class="table py-4">
                                        <div class="table-cell pr-3 whitespace-nowrap">
                                            <span class="font-semibold">2.</span>
                                        </div>
                                        <label for="not-same-as-shipping-address" class="table-cell w-full cursor-pointer">
                                            <span class="table-cell w-full font-semibold">
                                                Melalui M-Banking Mandiri
                                            </span>
                                        </label>
                                    </div>
                                    <div class="pl-10 pr-4 pb-4 border-t border-t-gray-200">
                                        <ul class="list-disc pt-4">
                                        	<li class="mb-2">Buka aplikasi m-banking.</li>
                                        	<li class="mb-2">Masukkan username dan password.</li>
                                        	<li class="mb-2">Pilih menu Bayar > One Time > Multipayment.</li>
                                        	<li class="mb-2">Masukkan nomor Virtual account > Lanjut.</li>
                                        	<li class="mb-2">Layar akan menampilkan konfirmasi. Jika sudah sesuai, masukkan PIN transaksi dan akhiri dengan OK.</li>
                                        	<li class="mb-2">Selesai</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 border border-neutral-300 rounded-md">
                                <div>
                                    <div class="table py-4">
                                        <div class="table-cell pr-3 whitespace-nowrap">
                                            <span class="font-semibold">3.</span>
                                        </div>
                                        <label for="not-same-as-shipping-address" class="table-cell w-full cursor-pointer">
                                            <span class="table-cell w-full font-semibold">
                                                Melalui I-Banking
                                            </span>
                                        </label>
                                    </div>
                                    <div class="pl-10 pr-4 pb-4 border-t border-t-gray-200">
                                        <ul class="list-disc pt-4">
                                        	<li class="mb-2">Akses situs Mandiri Online, masukkan username dan password.</li>
                                        	<li class="mb-2">Pilih menu Pembayaran > Multipayment.</li>
                                        	<li class="mb-2">Pilih Penyedia Jasa yang digunakan.</li>
                                        	<li class="mb-2">Masukkan nomor virtual account Mandiri dan nominal yang akan dibayarkan > Lanjut.</li>
                                        	<li class="mb-2">Layar akan menampilkan konfirmasi. Apabila sesuai, lanjutkan dengan pilih Konfirmasi.</li>
                                        	<li class="mb-2">Masukkan PIN token.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- permata -->
                        <div v-if="selectedBank == 'permata'" class="flex flex-col gap-y-4">
                            <div class="flex gap-x-4 items-center">
                            	<div class="w-28">
                            		<img src="../assets/images/permata.png" class="w-full" />
                            	</div>
                                <p class="text-lg">Permata Virtual Account</p>
                            </div>
                            <div class="px-4 border border-neutral-300 rounded-md">
                                <div>
                                    <div class="table py-4">
                                        <div class="table-cell pr-3 whitespace-nowrap">
                                            <span class="font-semibold">1.</span>
                                        </div>
                                        <label for="not-same-as-shipping-address" class="table-cell w-full cursor-pointer">
                                            <span class="table-cell w-full font-semibold">
                                                Melalui ATM Permata
                                            </span>
                                        </label>
                                    </div>
                                    <div class="pl-10 pr-4 pb-4 border-t border-t-gray-200">
                                        <ul class="list-disc pt-4">
                                        	<li class="mb-2">Silahkan pilih menu "Transaksi Lainnya". Setelah itu klik menu "Transfer" lalu klik menu "Rek NSB Lain Permata"</li>
                                        	<li class="mb-2">Masukkan nomor rekening dengan nomor Virtual Account Anda (contoh: 7810202001539202) dan pilih "Benar"</li>
                                        	<li class="mb-2">Kemudian masukkan jumlah nominal transaksi sesuai dengan invoice yang ditagihkan pada anda. Setelah itu pilih "Benar"</li>
                                        	<li class="mb-2">Lalu pilih rekening anda. Tunggu sebentar hingga muncul konfirmasi pembayaran. Kemudian pilih "Ya"</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 border border-neutral-300 rounded-md">
                                <div>
                                    <div class="table py-4">
                                        <div class="table-cell pr-3 whitespace-nowrap">
                                            <span class="font-semibold">2.</span>
                                        </div>
                                        <label for="not-same-as-shipping-address" class="table-cell w-full cursor-pointer">
                                            <span class="table-cell w-full font-semibold">
                                                Melalui Mobile Banking
                                            </span>
                                        </label>
                                    </div>
                                    <div class="pl-10 pr-4 pb-4 border-t border-t-gray-200">
                                        <ul class="list-disc pt-4">
                                        	<li class="mb-2">Silahkan login mobile banking yang dimiliki Permata Bank</li>
                                        	<li class="mb-2">Lalu klik menu "Pembayaran Tagihan" dan pilih "Virtual Account"</li>
                                        	<li class="mb-2">Kemudian pilih "Tagihan" Anda dan pilih Daftar "Tagihan Baru"</li>
                                        	<li class="mb-2">Masukkan nomor rekening dengan nomor Virtual Account Anda (contoh: 7810202001539202) sebagai Nomor Tagihan. Apabila selesai silahkan klik "Konfirmasi"</li>
                                        	<li class="mb-2">Masukkan "Nama Pengingat" setelah itu klik "Lanjut". Apabila selesai silahkan klik "Konfirmasi"</li>
                                        	<li class="mb-2">Masukkan jumlah nominal tagihan sesuai dengan invoice. Apabila selesai silahkan klik "Konfirmasi"</li>
                                        	<li class="mb-2">Masukkan Response Code dan klik Konfirmasi apabila telah selesai</li>
                                        	<li class="mb-2">Pembayaran selesai</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 border border-neutral-300 rounded-md">
                                <div>
                                    <div class="table py-4">
                                        <div class="table-cell pr-3 whitespace-nowrap">
                                            <span class="font-semibold">3.</span>
                                        </div>
                                        <label for="not-same-as-shipping-address" class="table-cell w-full cursor-pointer">
                                            <span class="table-cell w-full font-semibold">
                                                Melalui Internet Banking
                                            </span>
                                        </label>
                                    </div>
                                    <div class="pl-10 pr-4 pb-4 border-t border-t-gray-200">
                                        <ul class="list-disc pt-4">
                                        	<li class="mb-2">Silahkan login internet banking kemudian pilih menu "Pembayaran"</li>
                                        	<li class="mb-2">Lalu pilih sub menu "Pembayaran Tagihan" dan klik "Virtual Account"</li>
                                        	<li class="mb-2">Silahkan pilih rekening anda lalu masukkan nomor rekening dengan nomor Virtual Account Anda lalu klik "Lanjut"</li>
                                        	<li class="mb-2">Masukkan jumlah nominal tagihan pada bagian "Total Pembayaran" sesuai dengan invoice yang dikirimkan. Kemudian klik "Submit"</li>
                                        	<li class="mb-2">Tunggu sebentar hingga anda memperoleh SMS notifikasi yang berisi sebuah KODE. Nah, setelah itu masukkan KODE tersebut</li>
                                        	<li class="mb-2">Transaksi selesai</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</main>
</template>

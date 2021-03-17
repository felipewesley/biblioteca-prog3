export const WelcomeComponent = {
    
    template: `
    <main class="p-20 bg-gradient-to-r from-green-400 to-blue-500 h-screen">
        
    <h1 class="text-3xl mb-2 text-center">
        Seja bem-vindo à <span class="transition duration-300 ease-in-out font-mono text-2xl bg-gray-700 text-white rounded-md hover:bg-white hover:text-gray-700 px-4 py-2">BibliotecaApp_</span>
    </h1>

    <!-- <hr class="mb-12"> -->

    <div class="grid grid-cols-2 gap-4 mt-10">
        
        <div class="ml-8 leading-loose text-xl">
            Nesta aplicação você poderá:
            <ul class="list-disc list-inside bg-rose-200">
                <li>Verificar livros disponíveis</li>
                <li>Cadastrar novos livros</li>
                <li>Editar um livro existente</li>
                <li>Excluir um livro</li>
            </ul>
        </div>
        <div class="border-l-2 border-white">
            <div class="p-6 max-w-sm mx-auto my-auto bg-white rounded-xl shadow-md flex items-center space-x-4 transition duration-500 ease-in-out hover:bg-green-400 transform hover:-translate-y-1 hover:scale-100 cursor-pointer" @click="goToList">
                <div class="flex-shrink-0">
                    <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                    <div class="text-xl font-medium text-black">
                        Ir para listagem de livros
                    </div>
                    <p class="text-gray-500">Veja os livros da biblioteca</p>
                </div>
            </div>
        </div>
    
    </div>

    <div class="grid grid-cols-2 gap-4 mt-10">
        <div class="col-1"></div>
        <div class=col-2>
            <div class="container shadow-lg py-6 px-4 text-center text-xl text-white leading-loose">
                <p>
                    Projeto desenvolvido na disciplina de Programação III
                </p>
                utlizando
                <span class="transition duration-300 ease-in-out font-mono text-xl bg-green-600 text-white rounded-md px-4 py-2 shadow-lg">VueJS</span>
                e
                <span class="transition duration-300 ease-in-out font-mono text-xl bg-blue-600 text-white rounded-md px-4 py-2 shadow-lg">Tailwind CSS</span>
            </div>
        </div>
    </div>

</main>

<footer class="absolute inset-x-0 py-8 bottom-0 w-full text-center bg-gray-700 text-white">
    <div class="text-xl">
        Since 2021 &copy; Felipe Wesley
    </div>
</footer>`,
    methods: {
        goToList() {
            this.$router.push('/list');
        }
    }
}
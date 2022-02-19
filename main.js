const modal = document.querySelector('.modal')
        const button1 = document.querySelector('#button1')
        const button2 = document.querySelector('#button2')
        const button3 = document.querySelector('#button3')
        const card_a = document.querySelector('#card-a')
        const card_b = document.querySelector('#card-b')
        const card_c = document.querySelector('#card-c')
        const btnclose = document.querySelector('.modal__content--close')
        
        document.getElementById('card-a').src="https://i.ibb.co/tKWqw8J/spiderman.png"

        button1.addEventListener('click', () => {
            modal.classList.remove('hidden')
            card_a.src="https://i.ibb.co/tKWqw8J/spiderman.png"
            card_b.src="https://i.ibb.co/Xzsdvgg/robin.png"
            card_c.src="https://i.ibb.co/M18p91c/batman.webp"            
            modal.classList.add('visible')                            
        })

        button2.addEventListener('click', () => {
            modal.classList.remove('hidden')
            card_a.src="https://i.ibb.co/Xzsdvgg/robin.png"
            card_b.src="https://i.ibb.co/tKWqw8J/spiderman.png"
            card_c.src="https://i.ibb.co/M18p91c/batman.webp"
            modal.classList.add('visible')
        })
        
        button3.addEventListener('click', () => {
            modal.classList.remove('hidden')
            card_a.src="https://i.ibb.co/M18p91c/batman.webp"
            card_b.src="https://i.ibb.co/Xzsdvgg/robin.png"
            card_c.src="https://i.ibb.co/tKWqw8J/spiderman.png"
            modal.classList.add('visible')
        })

        btnclose.addEventListener('click', () => {
            modal.classList.remove('visible')
            modal.classList.add('hidden')
        })
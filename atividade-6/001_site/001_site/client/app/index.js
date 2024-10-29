document.addEventListener('DOMContentLoaded', (event) => {

    document
        .querySelector('.form')
        .addEventListener('submit', (submitEvent) => {
            submitEvent.preventDefault();

            const data = new Date(document.querySelector('#data').value);
            data.setMinutes(data.getMinutes() + new Date().getTimezoneOffset())
            
            const quantidade = document.querySelector('#quantidade').value;
            const valor = document.querySelector('#valor').value;

            const linha = document.createElement('tr');

            const tdData = document.createElement('td');
            tdData.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'short'});
            linha.appendChild(tdData);

            const tdQuantidade = document.createElement('td');
            tdQuantidade.innerHTML = quantidade;
            linha.appendChild(tdQuantidade);

            const tdValor = document.createElement('td');
            tdValor.innerHTML = valor;
            linha.appendChild(tdValor);

            const tdVolume = document.createElement('td');
            tdVolume.className = 'td-volume';
            tdVolume.innerHTML = (Number.parseFloat(valor) * Number.parseFloat(quantidade)).toString();
            linha.appendChild(tdVolume);

            document.querySelector('tbody').appendChild(linha);

            let somaVolumes = 0;
            for (const elVolume of document.getElementsByClassName('td-volume'))
            {
                somaVolumes += Number.parseFloat(elVolume.innerHTML);
            }

            document.querySelector('#resultado').innerHTML = `Soma de volumes: ${somaVolumes}`;

            const color = somaVolumes > 50 ? 'red' : 'green';
            
            for (const elTd of document.getElementsByTagName('td'))
            {
                elTd.style.backgroundColor = color;
            }
        });
});
        function findSynonyms() {
            let word = document.getElementById("wordInput").value.trim();
            let resultDiv = document.getElementById("result");

            if (word === "") {
                resultDiv.innerHTML = "<p style='color:red;'>Введите слово!</p>";
                return;
            }

            fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length === 0) {
                        resultDiv.innerHTML = `<p>Синонимов не найдено для "${word}".</p>`;
                    } else {
                        let synonyms = data.map(item => item.word).join(", ");
                        resultDiv.innerHTML = `<p><strong>Синонимы:</strong> ${synonyms}</p>`;
                    }
                })
                .catch(error => {
                    resultDiv.innerHTML = "<p style='color:red;'>Ошибка загрузки данных.</p>";
                    console.error("Ошибка запроса:", error);
                });
        }
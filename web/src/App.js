import React, { useState } from 'react'
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

navigator.geolocation.getCurrentPosition

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div id="input-nomargin" class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>

      <main>
        <ul>
          <li class="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/49489546?v=4" alt=""/>
              <div class="user-info">
                <strong>Ítalo Falzoni</strong>
                <span>React Native</span>
              </div>
            </header>

            <p>Biografia</p>
            <a href="https://github.com/ItaloFalzoni">GitHub</a>
          </li>

          <li class="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/49489546?v=4" alt=""/>
              <div class="user-info">
                <strong>Ítalo Falzoni</strong>
                <span>React Native</span>
              </div>
            </header>

            <p>Biografia</p>
            <a href="https://github.com/ItaloFalzoni">GitHub</a>
          </li>

          <li class="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/49489546?v=4" alt=""/>
              <div class="user-info">
                <strong>Ítalo Falzoni</strong>
                <span>React Native</span>
              </div>
            </header>

            <p>Biografia</p>
            <a href="https://github.com/ItaloFalzoni">GitHub</a>
          </li>

          <li class="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/49489546?v=4" alt=""/>
              <div class="user-info">
                <strong>Ítalo Falzoni</strong>
                <span>React Native</span>
              </div>
            </header>

            <p>Biografia</p>
            <a href="https://github.com/ItaloFalzoni">GitHub</a>
          </li>

        </ul>
      </main>
    </div>
  );
}

export default App

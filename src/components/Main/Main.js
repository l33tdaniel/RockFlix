function Main(props) {
    return (
        <Routes>
            <Route exact path="/" element={<Series/>} />
            <Route exact path="/show/:id/seasons" element={<Seasons/>} />
            <Route exact path="/season/:id/episodes" element={<Episodes/>} />
        </Routes>
    )
}
export default Main;
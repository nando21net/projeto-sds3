const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Monica</td>
                        <td>27</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr> <tr>
                        <td>22/04/2021</td>
                        <td>Paulo</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr> <tr>
                        <td>22/04/2021</td>
                        <td>Antonio</td>
                        <td>45</td>
                        <td>76</td>
                        <td>15017.00</td>
                    </tr> <tr>
                        <td>22/04/2021</td>
                        <td>Black Falcon</td>
                        <td>42</td>
                        <td>97</td>
                        <td>15017.00</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}

export default DataTable;